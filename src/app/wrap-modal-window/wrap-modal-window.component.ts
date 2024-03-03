import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-wrap-modal-window',
  standalone: true,
  imports: [],
  templateUrl: './wrap-modal-window.component.html',
  styleUrl: './wrap-modal-window.component.scss'
})
export class WrapModalWindowComponent {
    @Input( { required: true } ) isActive!: boolean
    @Output() onChangeActivity: EventEmitter<boolean>  = new EventEmitter<boolean>();
    closeWindow(): void {
        this.isActive = false
        this.onChangeActivity.emit( this.isActive )
    }
}
