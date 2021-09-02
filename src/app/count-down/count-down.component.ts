import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { intervalToDuration } from 'date-fns';

interface Duration {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
})
export class CountDownComponent implements OnInit {
  @Input() public endingTime: any;

  public duration?: Duration;

  refreshDurations() {
    const currentDate = new Date();
    const endDate = new Date(this.endingTime);

    const fnsDuration = intervalToDuration({
      start: currentDate,
      end: endDate,
    });

    this.duration = {
      hours: (fnsDuration.days || 0) * 24 + (fnsDuration.hours || 0),
      minutes: fnsDuration.minutes || 0,
      seconds: fnsDuration.seconds || 0,
    };
  }

  ngOnInit(): void {
    this.refreshDurations();
    setInterval(() => {
      this.refreshDurations();
    }, 1000);
  }
}
