import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { MaterialModule } from './material/material.module';
import { LoginPageModule } from './login/login.module';
import { CustomInterceptor } from './services/custom.interceptor';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, MaterialModule, LoginPageModule],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi:true
  }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
