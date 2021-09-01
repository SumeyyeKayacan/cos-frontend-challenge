import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { intervalToDuration } from 'date-fns';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
})
export class CountDownComponent implements OnInit {
  constructor() {}
  @Input() public endingTime: any;
  public duration: any;

  refreshDurations() {
    const currentDate = new Date();
    const endDate = new Date(this.endingTime);

    const duration = intervalToDuration({
      start: currentDate,
      end: endDate,
    });
    this.duration = duration;
  }

  ngOnInit(): void {
    this.refreshDurations();
    setInterval(() => {
      this.refreshDurations();
    }, 1000);
  }
}
