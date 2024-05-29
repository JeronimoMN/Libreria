import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastBooksComponent } from './last-books.component';

describe('LastBooksComponent', () => {
  let component: LastBooksComponent;
  let fixture: ComponentFixture<LastBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
