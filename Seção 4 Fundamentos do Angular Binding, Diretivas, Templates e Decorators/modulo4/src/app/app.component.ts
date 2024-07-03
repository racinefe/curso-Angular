import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "Texto Inicial2";
  inputType = "password";
  isDisable = false;

  enableImput() {
    this.isDisable = false;
  }
  disableInput() {
    this.isDisable = true;
  }
}
