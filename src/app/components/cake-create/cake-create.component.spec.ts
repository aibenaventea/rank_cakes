import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeCreateComponent } from './cake-create.component';

describe('CakeCreateComponent', () => {
  let component: CakeCreateComponent;
  let fixture: ComponentFixture<CakeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
