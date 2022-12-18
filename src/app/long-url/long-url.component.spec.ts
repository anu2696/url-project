import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongUrlComponent } from './long-url.component';

describe('LongUrlComponent', () => {
  let component: LongUrlComponent;
  let fixture: ComponentFixture<LongUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
