import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormInicioComponent } from './app-form-inicio.component';

describe('AppFormInicioComponent', () => {
  let component: AppFormInicioComponent;
  let fixture: ComponentFixture<AppFormInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFormInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
