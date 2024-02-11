import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/entities/member';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() member: Member = {};

  modalOpen: boolean = false;
  extraInfo: string = "Texto de información adicional";
  showSidebarFlag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showSidebar() {
    this.showSidebarFlag = true;
  }

  hideSidebar() {
    this.showSidebarFlag = false;
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}