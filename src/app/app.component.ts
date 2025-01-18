import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Convertidor Numerico y de Texto';

  textInput: string = '';
  numberInput: number | null = null;

  binaryText: string = '';
  hexadecimalText: string = '';
  octalText: string = '';

  binaryNumber: string = '';
  hexadecimalNumber: string = '';
  octalNumber: string = '';

  asciiValues: string = '';

  convertTextToBinary(text: string): string {
    return text.split('')
               .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
               .join(' ');
  }

  convertTextToHexadecimal(text: string): string {
    return text.split('')
               .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
               .join(' ');
  }

  convertTextToOctal(text: string): string {
    return text.split('')
               .map(char => char.charCodeAt(0).toString(8).padStart(3, '0'))
               .join(' ');
  }

  convertNumberToBinary(number: number): string {
    return number.toString(2);
  }

  convertNumberToHexadecimal(number: number): string {
    return number.toString(16);
  }

  convertNumberToOctal(number: number): string {
    return number.toString(8);
  }

  convertText(): void {
    const limitedText = this.textInput.slice(0, 20);
    this.binaryText = this.convertTextToBinary(limitedText);
    this.hexadecimalText = this.convertTextToHexadecimal(limitedText);
    this.octalText = this.convertTextToOctal(limitedText);
    this.asciiValues = this.convertTextToAscii(limitedText);
  }

  convertNumber(): void {
    if (this.numberInput !== null) {
      this.binaryNumber = this.convertNumberToBinary(this.numberInput);
      this.hexadecimalNumber = this.convertNumberToHexadecimal(this.numberInput);
      this.octalNumber = this.convertNumberToOctal(this.numberInput);
    }
  }

  convertTextToAscii(text: string): string {
    return text.split('')
               .map(char => char.charCodeAt(0).toString())
               .join(' ');
  }
  
}