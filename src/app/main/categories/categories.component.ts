import {Component, Input} from '@angular/core';
import { CategoryComponent } from './category/category.component'
import {AddingCategoryComponent, Category} from "./adding-category/adding-category.component";
import { MyStore } from "../../app.component";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [CategoryComponent, AddingCategoryComponent, NgClass],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
    @Input() myStore?: MyStore
    protected isActivePopup: boolean = false;

    addCategory( event:Category ):void {
        if ( this.myStore?.has( event.text ) ) return
        this.myStore?.set( event.text, {
            color: event.color,
            operations: [
                {
                    date: Date.now(),
                    sum: 0,
                    comment: ''
                }
            ]
        })
    }
}
