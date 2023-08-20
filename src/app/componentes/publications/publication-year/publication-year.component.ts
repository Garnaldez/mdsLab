import { Component, Input, OnInit } from '@angular/core';
import { PublicationYear } from 'src/app/entities/publicationYear';

@Component({
  selector: 'app-publication-year',
  templateUrl: './publication-year.component.html',
  styleUrls: ['./publication-year.component.scss']
})
export class PublicationYearComponent implements OnInit {

  @Input() publicationYear: PublicationYear = {};

  constructor() { }

  ngOnInit(): void {
  }

}
