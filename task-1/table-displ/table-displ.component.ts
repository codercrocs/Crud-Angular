import { Component } from '@angular/core';
import { DataService } from '../../dataservice.service';

@Component({
  selector: 'app-table-displ',
  templateUrl: './table-displ.component.html',
  styleUrls: ['./table-displ.component.css'],
})
export class TableDisplComponent {
  filteredData: any[];
  filterName: string = '';

  constructor(private dataService: DataService) {
    this.filteredData = dataService.getData();
  }
  deleteData(item: any) {
    this.dataService.deleteData(item);
  }
}
