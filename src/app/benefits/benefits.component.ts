import { Component, OnInit } from '@angular/core';
import { Benefit } from '../benefit.model';
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  firstSection: Benefit[] = [];
  secondSection: Benefit[] = [];

  constructor() {}

  totalBenefits: Benefit[] = [
    {
      icon: 'assets/images/Get Paid Instantly.png',
      title: 'Quick cash disbursement',
      description: 'Get terms loans that your business needs within 72 hrs',
      special: false
    },
    {
      icon: 'assets/images/Low interest rate.png',
      title: 'Low-interest rate',
      description:
        'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
      special: false
    },
    {
      icon: 'assets/images/Secure Payments.png',
      title: 'Zero Paperwork',
      description:
        'Get started instantly by submitting only your basic details & bank statements',
      special: false
    },
    {
      icon: 'assets/images/freelancer_feature_icon.png',
      title: 'Ace your business finances',
      description:
        'Manage banking, accounting & everything in between, on one platform',
      special: true
    },
    {
      icon: 'assets/images/Covid.png',
      title: 'Loans to fight COVID-19',
      description:
        'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      special: false
    }
  ];
  ngOnInit(): void {
    this.createCards();
  }
  createCards() {
    for (let i = 0; i < 3; i++) {
      this.firstSection.push(this.totalBenefits[i]);
    }

    this.secondSection.push(this.totalBenefits[3]);
    this.secondSection.push(this.totalBenefits[4]);
  }
}
