import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFomComponent } from './request-fom.component';

describe('RequestFomComponent', () => {
  let component: RequestFomComponent;
  let fixture: ComponentFixture<RequestFomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestFomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestFomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
