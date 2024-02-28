import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemMenuComponent } from './item-menu/item-menu.component'

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [ItemMenuComponent],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    @Input() currentSection?: string;
    @Input() myStore?: any;
    @Output() currentSectionChange = new EventEmitter<String>();
    @Output() currentMyStore = new EventEmitter<String>();
    changeData(){
        // const curValue = this.myStore.get( "Продукты" )
        // this.myStore.set( "Продукты", [ ...curValue, { comment1: "Комментарий1", sum1: "Сумма1" } ] )
        // this.currentMyStore.emit( this.myStore )
    }

    protected changeCurrentSection( event: Event ) {
        const inputValue = ( event.target as HTMLInputElement ).value
        this.currentSection = inputValue
        this.currentSectionChange.emit( this.currentSection )
    }
}
