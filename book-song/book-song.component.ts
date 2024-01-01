import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../dataservice.service';

@Component({
  selector: 'app-book-song',
  templateUrl: './book-song.component.html',
  styleUrls: ['./book-song.component.css'],
})
export class BookSongComponent {
  userForm: FormGroup;
  filterName: string = '';
  constructor(private fb: FormBuilder, private dataservice: DataService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      genre: ['', Validators.required],
      creator: ['', Validators.required],
      list: ['', Validators.required],
    });
  }

  onSubmit() {
    // if (this.userForm.valid) {
    if (this.userForm.value.list === 'book') {
      this.dataservice.addBooklist(this.userForm.value);
    } else {
      this.dataservice.addSonglist(this.userForm.value);
    }
    console.log('submit button clicked');
    console.log(this.userForm.value);

    this.resetForm();
    // }
    console.log('the form invalid');
  }

  resetForm() {
    this.userForm.reset();
  }
}
