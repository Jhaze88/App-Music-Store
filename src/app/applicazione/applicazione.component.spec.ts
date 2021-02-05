import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicazioneComponent } from './applicazione.component';

describe('ApplicazioneComponent', () => {
  let component: ApplicazioneComponent;
  let fixture: ComponentFixture<ApplicazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
