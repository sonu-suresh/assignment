import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss']
})
export class CustomSliderComponent implements OnInit {
  @Output() sliderChanged = new EventEmitter<any>();
  @Input('title') title: String;
  @Input('startValue') startValue: Number = 50000;
  @Input('min') min: Number = 30000;
  @Input('max') max: Number = 300000;
  @Input('showMinMax') showMinMax: boolean = false;
  value = 50000;
  constructor() {}

  ngOnInit(): void {}
  onSliderChange() {
    this.sliderChanged.emit({ title: this.title, value: this.value });
  }
}
