import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component'
import { SidebarComponent } from './sidebar/sidebar.component'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MainComponent, SidebarComponent,NgFor],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    protected currentSection: string = 'categories'
    // protected myStore: Map<string, object> = new Map([
    protected myStore: any = new Map([
        [ 'Продукты', [ { comment: "Комментарий", sum: "Сумма" } ] ],
        // ['Одежда', {comment: "", sum: ""}],
        // ['Развлечения', {comment: "", sum: ""}],
        // ['Покупки', {comment: "", sum: ""}]
    ])
    protected testObj = {
        Продукты: [ 
            { comment: "Хлеб", sum: 85, date: "15.02" },
            { comment: "Молоко", sum: 90, date: "15.02" },
        ],
        Развлечения: [
            { comment: "Кино", sum: 450, date: "16.02" },
            { comment: "Кафе", sum: 2900, date: "19.02" },
        ]
    }
    mapShow(){
        console.log( this.myStore )
    }
}
