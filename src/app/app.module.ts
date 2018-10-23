import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateComponent, MyCurrencyPipe, MyCurrencyFormatterDirective } from './create';
import { ReviewComponent } from './review/review.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './utils/not-found-component/not-found-component.component';
import { MoveMoneyComponent } from './move-money/move-money.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        ReviewComponent,
        ConfirmComponent,
        DashboardComponent,
        NotFoundComponent,
        MoveMoneyComponent,
        MyCurrencyPipe,
        MyCurrencyFormatterDirective,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'movemoney',
                component: MoveMoneyComponent
            },
            {
                path: '**',
                component: NotFoundComponent
            },
        ])
    ],
    providers: [
        MyCurrencyPipe
    ],
    bootstrap: [AppComponent],
    exports: [
        MyCurrencyPipe,
        MyCurrencyFormatterDirective,
    ]
})
export class AppModule { }
