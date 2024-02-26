import { Component, Input, } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component'
import { OperationsComponent } from './operations/operations.component'
import { AnalyticsComponent } from './analytics/analytics.component'

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [CategoriesComponent, OperationsComponent, AnalyticsComponent, NgSwitch, NgSwitchCase],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {
    @Input() currentSection?:string;

}
