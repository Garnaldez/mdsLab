import { Component, Input, OnInit } from '@angular/core';
import { PublicationYear } from 'src/app/entities/publicationYear';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  @Input() publicationYear: PublicationYear = {};

  constructor() { }

  ngOnInit(): void {
  }

}
