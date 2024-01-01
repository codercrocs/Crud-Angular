import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSongComponent } from './book-song.component';

describe('BookSongComponent', () => {
  let component: BookSongComponent;
  let fixture: ComponentFixture<BookSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookSongComponent]
    });
    fixture = TestBed.createComponent(BookSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
