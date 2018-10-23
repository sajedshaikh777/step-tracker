import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { STEPS } from '../app.config';
import { PanelStateConstant } from '../utils/utils.constants';
import { DataServicesFactory } from '../services/data/data-services.factory';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent extends AppComponent implements OnInit {

  constructor() {
    super();
    this.stepIndicator = STEPS.REVIEW + 1;
  }

  ngOnInit() {
  }

  cancelClick() {
    DataServicesFactory.setJourneyStep(PanelStateConstant.txCreate);
  }

  continueClick() {
    DataServicesFactory.setJourneyStep(PanelStateConstant.txConfirm);
  }

}
