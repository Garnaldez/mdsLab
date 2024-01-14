import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabnewComponent } from './labnew.component';

describe('LabnewComponent', () => {
  let component: LabnewComponent;
  let fixture: ComponentFixture<LabnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
