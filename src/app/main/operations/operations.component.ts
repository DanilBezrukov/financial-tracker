import {Component, Input, OnInit} from '@angular/core';
import { OperationComponent } from './operation/operation.component'
import {MyStore} from "../../app.component";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-operations',
    standalone: true,
    imports: [OperationComponent, DatePipe],
    templateUrl: './operations.component.html',
    styleUrl: './operations.component.scss'
})
export class OperationsComponent implements OnInit {
    @Input() myStore?: MyStore
    ngOnInit() {
        if ( this.myStore?.size ) {
            for ( let elem of this.myStore?.values() ){
                console.log( elem, typeof elem )
            }


        }
    }
}
