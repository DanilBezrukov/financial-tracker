import {Component, Input, OnInit,} from '@angular/core';
import {NgForOf, NgSwitch, NgSwitchCase} from '@angular/common';
import { CategoriesComponent } from './categories/categories.component'
import { OperationsComponent } from './operations/operations.component'
import { AnalyticsComponent } from './analytics/analytics.component'
import { MyStore } from "../app.component";

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [CategoriesComponent, OperationsComponent, AnalyticsComponent, NgSwitch, NgSwitchCase, NgForOf],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {
    @Input() currentSection?:string;
    @Input() myStore?: MyStore

}
