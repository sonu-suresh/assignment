import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss']
})
export class CustomSliderComponent implements OnInit {
  @Output() sliderChanged = new EventEmitter<any>();
  @Input('title') title: string;
  @Input('startValue') startValue: number = 50000;
  @Input('min') min: number = 30000;
  @Input('max') max: number = 300000;
  @Input('showMinMax') showMinMax: boolean = false;
  value = 50000;
  constructor() {}

  ngOnInit(): void {}
  onSliderChange(): void {
    this.sliderChanged.emit({ title: this.title, value: this.value });
  }
}
