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
    @Output() onCurrentSection:EventEmitter<string> = new EventEmitter<string>();

    protected changeCurrentSection( event: Event ):void {
      const inputValue:string = ( event.target as HTMLInputElement ).value
      this.onCurrentSection.emit( inputValue )
    }
}
