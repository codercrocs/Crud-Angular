import { Component } from '@angular/core';
import { DataService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.css'],
})
export class SongTableComponent {
  songlists: any = [];
  constructor(private dataservice: DataService) {}
  ngOnInit() {
    this.songlists = this.dataservice.getSongData();
  }

  onDelete(item: any) {
    this.dataservice.DeleteSong(item);
  }
}
