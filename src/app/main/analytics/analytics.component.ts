import { Component } from '@angular/core';
import { AnalyticalPointComponent } from './analytical-point/analytical-point.component'

@Component({
    selector: 'app-analytics',
    standalone: true,
    imports: [AnalyticalPointComponent],
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.scss'
    // styleUrl: './dop.component.scss'
    // styleUrl: './analytics.component.scss' && './dop.component.scss',
})
export class AnalyticsComponent {

}
