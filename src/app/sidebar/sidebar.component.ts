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
    @Output() currentSectionChange = new EventEmitter<String>();

    protected changeCurrentSection( event: Event ) {
        const inputValue = ( event.target as HTMLInputElement ).value
        this.currentSection = inputValue
        this.currentSectionChange.emit( this.currentSection )
    }
}
