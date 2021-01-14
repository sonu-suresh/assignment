import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss']
})
export class CustomSliderComponent implements OnInit {
  @Input('title') title: String;
  @Input('startValue') startValue: Number = 50000;
  @Input('min') min: Number = 100000;
  @Input('max') max: Number = 300000;
  @Input('showMinMax') showMinMax: boolean = false;
  value = 50000;
  constructor() {}

  ngOnInit(): void {}
}
