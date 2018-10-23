import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { STEPS } from '../app.config';
import { PanelStateConstant } from '../utils/utils.constants';
import { DataServicesFactory } from '../services/data/data-services.factory';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends AppComponent implements OnInit {

  constructor() {
    super();
    this.stepIndicator = STEPS.CREATE + 1;
  }

  ngOnInit() {
  }

  continueClick() {
    DataServicesFactory.setJourneyStep(PanelStateConstant.txReview);
  }
}
