import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-table',
  templateUrl: 'form-table.component.html',
  styleUrls: ['./form-table.component.css'],
})
export class FormTableComponent {
  userForm: FormGroup;
  filterName: string = '';

  constructor(private fb: FormBuilder, public dataService: DataService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  saveData() {
    if (this.userForm.valid) {
      this.dataService.addData(this.userForm.value);
      this.resetForm();
    }
  }
  resetForm() {
    this.userForm.reset();
  }
}
