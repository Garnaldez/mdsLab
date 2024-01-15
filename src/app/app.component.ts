import { animate, state, style, transition, trigger } from '@angular/animations';
import { APP_BASE_HREF } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@NgModule({
  providers: [{provide: APP_BASE_HREF, useValue: '/mdsLab/'}]
})
export class AppComponent {
  showMenu: boolean = false;

  toggleMenu(showMenu: boolean) { 
    this.showMenu = !this.showMenu;
  }
 
}
