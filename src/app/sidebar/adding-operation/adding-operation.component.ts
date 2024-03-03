import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WrapModalWindowComponent} from "../../wrap-modal-window/wrap-modal-window.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MyStore, MyStoreItem} from "../../app.component";
import {NgStyle} from "@angular/common";

interface Operation {
    comment: string | undefined | null
    sum: number
    category: string
}
@Component({
  selector: 'app-adding-operation',
  standalone: true,
    imports: [
        WrapModalWindowComponent,
        FormsModule,
        ReactiveFormsModule,
        NgStyle
    ],
  templateUrl: './adding-operation.component.html',
  styleUrl: './adding-operation.component.scss'
})
export class AddingOperationComponent {
    @Input() myStore?: MyStore
    @Input( { required: true } ) isActivePopup!: boolean
    @Output() isActivePopupChange:EventEmitter<boolean> = new EventEmitter<boolean>()
    onChangeActivity( flag:boolean ):void {
        this.isActivePopup = flag
        this.isActivePopupChange.emit( this.isActivePopup )
        this.form.reset()
    }

    protected form = new FormGroup({
        sum: new FormControl(0, Validators.required),
        category: new FormControl('', Validators.required),
        comment: new FormControl(''),
    } )
    onSubmit():void {
        const { sum, category, comment }: Operation = this.form.value as Operation
        const categoryStore:MyStoreItem = this.myStore?.get( category ) as MyStoreItem
        categoryStore.operations.unshift( { date: Date.now(), comment, sum } )
        this.myStore?.set( category, categoryStore )
        this.form.reset()
        this.onChangeActivity( false )
    }
}
