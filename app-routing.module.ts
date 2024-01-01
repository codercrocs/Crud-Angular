import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TableDisplComponent } from './task-1/table-displ/table-displ.component';
import { Task1Component } from './task-1/task-1.component';
import { TimerComponent } from './timer-component/timer-component.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { BookSongComponent } from './book-song/book-song.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'task-1', component: Task1Component },
  { path: 'ui-design', component: UiDesignComponent },
  { path: 'home-page', component: HomePageComponent },
  // { path: 'table', component: TableDisplComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'grid-layout', component: GridLayoutComponent },
  { path: 'book-song', component: BookSongComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
