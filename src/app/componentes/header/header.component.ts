import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('start', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('done', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('* => done', animate('300ms ease-in-out')),
      transition('* => start', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  title = 'mdslab';
  menuAnimationState: string = 'out';

  @ViewChild('sidenav') sidenav: any;
  @Output() showMenuEmitter = new EventEmitter<boolean>();

  showMenu: boolean = false;

  animationDone(event: any) {
    if (event.toState === 'done') {
      this.sidenav.close();
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenuEmitter.emit(this.showMenu);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
