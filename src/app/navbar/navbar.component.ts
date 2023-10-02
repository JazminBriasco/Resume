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
    let height = (screen.height - 200);
      if(window.scrollY <= height) {
        this.navTittle = '';
      }
      if(window.scrollY >= height && window.scrollY <= (height*2)) {
        this.navTittle = 'Hi!';
      }
      if(window.scrollY >=(height*2) && window.scrollY <=(height*3)) {
        this.navTittle = 'Knowledge';
      }
      if(window.scrollY >=(height*3) && window.scrollY <=(height*4)) {
        this.navTittle = 'Education';
      }
      if(window.scrollY >=(height*4) && window.scrollY <=(height*5)) {
        this.navTittle = 'Experiencie';
      }
      if(window.scrollY >=(height*5) && window.scrollY <=(height*6)) {
        this.navTittle = 'Certifications';
      }
      if(window.scrollY >=(height*6) && window.scrollY <=(height*7)) {
        this.navTittle = 'Soft Skills';
      }
      if(window.scrollY >=(height*7)) {
        this.navTittle = 'Contact';
      }
    }
}
