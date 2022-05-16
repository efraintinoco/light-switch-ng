import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  private showLight: boolean = false

  lightSwitch(): void {
    if (this.showLight === false) {
      this.showLight = true
    } else {
      this.showLight = false
    }
  }
}


