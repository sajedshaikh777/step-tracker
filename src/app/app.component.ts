import { Component, OnInit } from '@angular/core';

import { PanelStateConstant } from './utils/utils.constants';
import { DataServicesFactory } from './services/data/data-services.factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Panel state constants
   */
  public createPanel: String = 'txCreate';
  public reviewPanel: String = 'txReview';
  public confirmPanel: String = 'txConfirm';

  public STEPS: any;
  public mainStep: any;
  public stepIndicator: any;

  constructor() {
    this.STEPS = PanelStateConstant;
  }

  ngOnInit() {
    this.mainStep = PanelStateConstant.txCreate;
  }


  /**
   * Step getter
   */
  get step(): any {
    return DataServicesFactory.getJourneyStep();
  }

  /**
   * Step setter
   */
  set step(target: any) {
    DataServicesFactory.setJourneyStep(target);
  }

}
