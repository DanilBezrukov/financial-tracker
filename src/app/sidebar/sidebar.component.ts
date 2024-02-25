import { Component } from '@angular/core';
import { ItemMenuComponent } from './item-menu/item-menu.component'

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [ItemMenuComponent],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    protected currentSection: string = 'categories' // operations, analytics

    protected changeCurrentSection( event: any ) {
        const inputValue = event.target.value
        console.log( "changeCurrentSection", inputValue )
    }
}
