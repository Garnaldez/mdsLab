import { Component, Input, OnInit } from '@angular/core';
import { LabNew } from 'src/app/entities/labNew';

@Component({
  selector: 'app-labnew',
  templateUrl: './labnew.component.html',
  styleUrls: ['./labnew.component.scss']
})
export class LabnewComponent implements OnInit {

  @Input() labNew: LabNew = { date: '', title: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
