import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemMenuComponent } from './item-menu/item-menu.component'
import {AddingOperationComponent} from "./adding-operation/adding-operation.component";
import {MyStore} from "../app.component";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [ItemMenuComponent, AddingOperationComponent],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    @Output() onCurrentSection:EventEmitter<string> = new EventEmitter<string>();
    @Input() myStore?: MyStore
    protected isActivePopup: boolean = false;
    protected changeCurrentSection( event: Event ):void {
      const inputValue:string = ( event.target as HTMLInputElement ).value
      this.onCurrentSection.emit( inputValue )
    }
}
