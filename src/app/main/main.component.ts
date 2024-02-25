import { Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component'
import { OperationsComponent } from './operations/operations.component'
import { AnalyticsComponent } from './analytics/analytics.component'

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [CategoriesComponent, OperationsComponent, AnalyticsComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {

}
