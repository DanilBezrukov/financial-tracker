import {Component, Input} from '@angular/core';
import {MyStoreItem} from "../../../app.component";
import { NgStyle, NgClass } from "@angular/common";

@Component({
    selector: 'app-category',
    standalone: true,
    imports: [
        NgStyle,
        NgClass
    ],
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss'
})
export class CategoryComponent {
    @Input( { required: true }) nameCategory!:string
    @Input( { required: true }) data!:MyStoreItem
    getSumCategory():number{
        return this.data.operations.reduce( ( acc: number, elem:{ comment?: string | null , sum:number, date:number } ):number => {
            return acc + elem.sum
        }, 0 )
    }
}
