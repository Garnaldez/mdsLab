import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsubheaderComponent } from './picsubheader.component';

describe('PicsubheaderComponent', () => {
  let component: PicsubheaderComponent;
  let fixture: ComponentFixture<PicsubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicsubheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicsubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
