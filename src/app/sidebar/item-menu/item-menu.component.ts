import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-item-menu',
    standalone: true,
    imports: [],
    templateUrl: './item-menu.component.html',
    styleUrl: './item-menu.component.scss'
})
export class ItemMenuComponent {
    @Input( { required: true } ) value:string = '';
    @Input() checked: boolean = false
}
