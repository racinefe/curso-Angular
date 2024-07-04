import { Component } from '@angular/core';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "Texto Inicial2";
  inputType = "password";
  isDisable = false;

  setText() {
    this.inputType = 'text';
  }
  setPassword() {
    this.inputType = 'password';
  }

  enableImput() {
    this.isDisable = false;
  }
  disableInput() {
    this.isDisable = true;
  }

  handLeInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value
    console.log(currentText);
  }
}
