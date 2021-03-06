import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Server2Component } from './server2/server2.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { ServerlistComponent } from './serverlist/serverlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Server2Component,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerlistComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([

      {
        path:'serverlist',
        component:ServerlistComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
