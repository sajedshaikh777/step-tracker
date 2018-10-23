import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { STEPS } from '../app.config';
import { PanelStateConstant } from '../utils/utils.constants';
import { DataServicesFactory } from '../services/data/data-services.factory';

@Component({
  selector: 'app-move-money',
  templateUrl: './move-money.component.html',
  styleUrls: ['./move-money.component.css']
})
export class MoveMoneyComponent extends AppComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
