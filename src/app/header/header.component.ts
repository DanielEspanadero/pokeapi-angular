import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  backgroundImage: string;

  constructor() {
    this.backgroundImage = this.generateImagePath();
  }

  generateImagePath(): string {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return `assets/header-backgrounds/${randomNumber}.jpg`;
  }
}
