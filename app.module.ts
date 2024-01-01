import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from './timer-component/timer-component.component';
import { FormTableComponent } from './task-1/form-table/form-table.component';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TableDisplComponent } from './task-1/table-displ/table-displ.component';
import { Task1Component } from './task-1/task-1.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { BookSongComponent } from './book-song/book-song.component';
import { BookTableComponent } from './book-song/book-table/book-table.component';
import { SongTableComponent } from './book-song/song-table/song-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterpipePipe,
    TimerComponent,
    FormTableComponent,
    UiDesignComponent,
    HomePageComponent,
    TableDisplComponent,
    Task1Component,
    GridLayoutComponent,
    BookSongComponent,
    BookTableComponent,
    SongTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
