import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription, timer } from 'rxjs';
import { map, scan, startWith, takeUntil, tap } from 'rxjs/operators';
import { DataService } from '../dataservice.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: 'timer-component.component.html',
  styleUrls: ['./timer-component.component.css'],
})
export class TimerComponent {
  time = '00:00';
  isRunning = false;
  isPaused = false;

  private timer$ = interval(100); // Emit every  100 millisecond
  private stop$ = new Subject<void>();

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.stop$ = new Subject();
      this.timer$
        .pipe(
          startWith(0), // Start with 0 seconds
          scan((acc) => acc + 1), // Increment seconds
          tap((time) => (this.time = this.formatTime(time))), // Update time display
          takeUntil(this.stop$) // Stop on stop event
        )
        .subscribe();
    }
  }

  stop() {
    this.isRunning = false;
    this.stop$.next();
    this.stop$.complete();
    // this.isPaused = true;
  }

  resume() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.isPaused = false;
      this.stop$ = new Subject();
      // Use the current time as the starting point
      const currentSeconds = this.getCurrentTimeInSeconds();
      this.timer$ = timer(1, 100).pipe(
        startWith(currentSeconds),
        scan((acc) => acc + 1),
        tap((time) => (this.time = this.formatTime(time))),
        takeUntil(this.stop$)
      );

      this.timer$.subscribe();
    }
  }
  //getting current minutes and  seconds
  getCurrentTimeInSeconds(): number {
    // console.log('time insside getcurrenttimeinseconds' + this.time);
    const [minutes, seconds] = this.time.split(':').map(Number);
    // console.log('getcurrenttimeseconds ' + minutes, seconds);
    return minutes * 60 + seconds;
  }

  reset() {
    this.stop();
    this.time = '00:00';
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    // console.log('format time', minutes);
    const seconds = time % 60;
    // console.log('format time seconds', seconds);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`; //00:00 format
  }
}
