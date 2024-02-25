import { Component } from '@angular/core';
import { OperationComponent } from './operation/operation.component'

@Component({
    selector: 'app-operations',
    standalone: true,
    imports: [ OperationComponent ],
    templateUrl: './operations.component.html',
    styleUrl: './operations.component.scss'
})
export class OperationsComponent {

}
