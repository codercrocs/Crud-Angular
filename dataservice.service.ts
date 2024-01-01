import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any[] = [];
  private booklists: any[] = [];
  private songlists: any[] = [];

  addData(item: any) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }

  deleteData(item: any) {
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  //============================================//

  // book-table component
  addBooklist(item: any) {
    this.booklists.push(item);
  }
  addSonglist(item: any) {
    this.songlists.push(item);
  }

  getBookData() {
    return this.booklists;
  }

  getSongData() {
    return this.songlists;
  }

  DeleteBook(item: any) {
    const index = this.booklists.indexOf(item);
    if (index !== -1) {
      this.booklists.splice(index, 1);
      // console.log('item deleted');
    }
    // console.log('no item found');
  }

  DeleteSong(item: any) {
    const index = this.songlists.indexOf(item);
    if (index !== -1) {
      this.songlists.splice(index, 1);
    }
  }
}
