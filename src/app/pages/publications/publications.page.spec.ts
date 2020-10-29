import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsPage } from './publications.page';

describe('PublicationsComponent', () => {
  let component: PublicationsPage;
  let fixture: ComponentFixture<PublicationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
