import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  @Output() switchLight = new EventEmitter()

  handleClick() {
    this.switchLight.emit()
  }

}
