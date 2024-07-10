import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navTittle: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    if(window.scrollY <= 700) {
      this.navTittle = '';
    }
    if(window.scrollY >= 700 && window.scrollY <= 1400) {
      this.navTittle = 'Hi!';
    }
    if(window.scrollY >= 1400 && window.scrollY <= 2200) {
      this.navTittle = 'Knowledge';
    }
    if(window.scrollY >= 2200 && window.scrollY <= 2800) {
      this.navTittle = 'Education';
    }
    if(window.scrollY >= 3000 && window.scrollY <= 4600) {
      this.navTittle = 'Experiencie';
    }
    if(window.scrollY >= 4600 && window.scrollY <= 5100) {
      this.navTittle = 'Certifications';
    }
    if(window.scrollY >= 5100 && window.scrollY <= 5700) {
      this.navTittle = 'Soft Skills';
    }
    if(window.scrollY >= 5700) {
      this.navTittle = 'Contact';
    }
  }
}
