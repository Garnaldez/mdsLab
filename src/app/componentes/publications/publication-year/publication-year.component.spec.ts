import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationYearComponent } from './publication-year.component';

describe('PublicationYearComponent', () => {
  let component: PublicationYearComponent;
  let fixture: ComponentFixture<PublicationYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
