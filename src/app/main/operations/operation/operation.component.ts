import {Component, Input } from '@angular/core';
import '@angular/common/locales/global/ru';
import {CurrencyPipe, DatePipe} from "@angular/common";

@Component({
    selector: 'app-operation',
    standalone: true,
    imports: [
        DatePipe,
        CurrencyPipe
    ],
    templateUrl: './operation.component.html',
    styleUrl: './operation.component.scss'
})
export class OperationComponent {
    @Input() operation!:{ date:number, sum:number, comment?:string | null }
}
