import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  backgroundImage: string;

  logoTexts: string[] = [];

  constructor() {
    this.backgroundImage = this.generateImagePath();
    this.generateLogoTexts();
  }

  generateImagePath(): string {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return `assets/header-backgrounds/${randomNumber}.jpg`;
  }

  generateLogoTexts(): void {
    const baseText = 'Sitio web creado por Daniel Españadero utilizando';
    const numRepetitions = 40;

    for (let i = 0; i < numRepetitions; i++) {
      this.logoTexts.push(baseText);
    }
  }
}
