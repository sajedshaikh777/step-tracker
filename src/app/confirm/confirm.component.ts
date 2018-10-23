import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { STEPS } from '../app.config';
import { PanelStateConstant } from '../utils/utils.constants';
import { DataServicesFactory } from '../services/data/data-services.factory';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent extends AppComponent implements OnInit {

  constructor() {
    super();
    this.stepIndicator = STEPS.CONFIRM + 1;
  }

  ngOnInit() {
  }

  newTransactionClick() {
    DataServicesFactory.setJourneyStep(PanelStateConstant.txCreate);
  }

}
