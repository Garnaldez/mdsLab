import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/entities/member';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() member: Member = {};
  

  constructor() { }

  ngOnInit(): void {
  }


}