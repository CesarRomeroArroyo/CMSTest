import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderModalComponent } from './render-modal.component';

describe('RenderModalComponent', () => {
  let component: RenderModalComponent;
  let fixture: ComponentFixture<RenderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
