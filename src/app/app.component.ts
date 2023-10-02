import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  smallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.smallScreen = screen.width <= 1300 ? true : false;
  }

}

