import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.scss']
})
export class EligibilityComponent implements OnInit {
  constructor() {}
  loanAmount = 0;
  emiAmount = 0;
  maxEmiAmount = 0;
  ngOnInit(): void {}

  calculateLoan(slideObj): void {
    if (slideObj && slideObj.title === 'Monthly Income') {
      this.loanAmount = slideObj.value * 2;
      this.emiAmount =
        this.loanAmount / 12 + ((this.loanAmount / 12) * 2) / 100;
    }
  }
}
