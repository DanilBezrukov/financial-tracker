import {Component, EventEmitter} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component'
import { SidebarComponent } from './sidebar/sidebar.component'
interface MyStoreItem {
  comment: string;
  sum: string;
}
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
    protected myStore: Map< string, MyStoreItem[] > = new Map([
        [ 'Продукты',  [
            {
              comment: "Комментарий",
              sum: "Сумма"
            }
          ]
        ],
    ])
}
