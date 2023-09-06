import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDisplayComponent } from './url-display.component';

describe('UrlDisplayComponent', () => {
  let component: UrlDisplayComponent;
  let fixture: ComponentFixture<UrlDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
