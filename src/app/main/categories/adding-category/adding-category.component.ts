import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WrapModalWindowComponent} from "../../../wrap-modal-window/wrap-modal-window.component";
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
export interface Category {
    text: string
    color: string
}
@Component({
    selector: 'app-adding-category',
    standalone: true,
    imports: [
        WrapModalWindowComponent,
        ReactiveFormsModule,
    ],
  templateUrl: './adding-category.component.html',
  styleUrl: './adding-category.component.scss'
})
export class AddingCategoryComponent {
    @Input( { required: true } ) isActivePopup!: boolean
    @Output() isActivePopupChange:EventEmitter<boolean> = new EventEmitter<boolean>()
    @Output() onAddCategory:EventEmitter<Category> = new EventEmitter<Category>()
    onChangeActivity( flag:boolean ):void {
        this.isActivePopup = flag
        this.isActivePopupChange.emit( this.isActivePopup )
        this.form.reset()
    }
    protected form = new FormGroup({
        text: new FormControl('', Validators.required),
        color: new FormControl('', Validators.required),
    })
    onSubmit():void {
        const entry: Category = this.form.value as Category
        this.onAddCategory.emit( entry )
        this.form.reset()
        this.onChangeActivity( false )
    }
}
