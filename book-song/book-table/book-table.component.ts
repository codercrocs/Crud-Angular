import { Component } from '@angular/core';
import { DataService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css'],
})
export class BookTableComponent {
  booklists: any = [];
  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.booklists = this.dataservice.getBookData();
  }

  onDelete(item: any) {
    this.dataservice.DeleteBook(item);
  }
}
