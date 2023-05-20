import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  sticky: boolean = false;
  menuOpen: boolean = false;

  links = [
    { url: '/', text: 'Inicio', exact: true },
    { url: '/pokedex', text: 'Pokedex', exact: false },
    { url: '/history', text: 'Historia', exact: false },
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.renderer.addClass(document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
  }
}
