import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CheckRfidComponent } from './check-rfid/check-rfid.component';
import { OpenBarrierInComponent } from './open-barrier-in/open-barrier-in.component';
import { OpenBarrierOutComponent } from './open-barrier-out/open-barrier-out.component';
import { GetScaleComponent } from './get-scale/get-scale.component';

const appRoutes: Routes = [
  { path: 'check-rfid', component: CheckRfidComponent },
  { path: 'open-barrier-in', component: OpenBarrierInComponent },
  { path: 'get-scale', component: GetScaleComponent },
  { path: 'open-barrier-out', component: OpenBarrierOutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CheckRfidComponent,
    OpenBarrierInComponent,
    OpenBarrierOutComponent,
    GetScaleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
