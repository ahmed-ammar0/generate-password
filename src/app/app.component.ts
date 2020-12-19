import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  passwordLength = 0;
  password = "";
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  onChangeLength (value: string) {
    let parsedLength =  +value;
    if (!isNaN(parsedLength)) {
      this.passwordLength = parsedLength;
    }
  }
  checkUseLetters () {
    this.useLetters = !this.useLetters;
  }
  checkUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  checkUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }
  clickOnButton () {
    const letters = "qwertyuioplkjhgfdsazxcvbnm";
    const numbers = "0123456789";
    const symbols = "@#$%^&*(){}><";
    let validChars = "";
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols
    }

    let myPassword = "";
    for (let i = 0; i < this.passwordLength; i++) {
      let index = Math.floor(Math.random() * validChars.length);
      myPassword += validChars[index];
    }

    this.password = myPassword;
  }
}
