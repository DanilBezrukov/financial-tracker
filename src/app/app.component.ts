import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component'
import { SidebarComponent } from './sidebar/sidebar.component'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MainComponent, SidebarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    protected currentSection: string = 'categories' // operations, analytics
}
