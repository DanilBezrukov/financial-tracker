import {Component, Input} from '@angular/core';
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
export class OperationsComponent {
    @Input() myStore?: MyStore
    getFlagSimpleBody():boolean {
        if( !this.myStore?.size ) return true
        for( const { operations } of this.myStore.values() ){
            if( operations.length ) return false
        }
        return true
    }
    // getFlagSimpleBody():any {
    //     let i:number = 0;
    //     const check = ():any => {
    //         if( !this.myStore?.size ) return true
    //
    //         do {
    //             i++;
    //             console.log( "start" )
    //         } while (i % this.myStore.size != 0);
    //         if (i == this.myStore.size ) {
    //             console.log( "end" )
    //         } else {
    //             setTimeout(check);
    //         }
    //     }
    //     check()
    // }
}
