import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component'

@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [ CategoryComponent ],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

}
