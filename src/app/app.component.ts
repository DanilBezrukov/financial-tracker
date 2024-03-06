import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component'
import { SidebarComponent } from './sidebar/sidebar.component'
export interface MyStoreItem{
    color: string
    operations: {
        comment?: string | null | undefined;
        sum: number;
        date: number;
    }[];
}

export type MyStore = Map< string, MyStoreItem >

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MainComponent, SidebarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    protected currentSection: string = 'categories'
    changeCurrentSection( value: string ):void {
        this.currentSection = value
    }
    protected myStore: MyStore = new Map()
    fillMyStore():void {
        const generateColor = ():string => '#' + Math.floor(Math.random() * 16777215).toString(16);
        // const generateSum = ():number => Math.floor(Math.random() * 10000 );
        for (let i = 0; i < 100; i++){
            this.myStore?.set( `Категория${i + 1}`, {
                color: generateColor(),
                operations: [
                    
                    // {
                    //     date: Date.now(),
                    //     sum: generateSum(),
                    //     comment: ''
                    // }
                ]
            })
        }
    }
}
