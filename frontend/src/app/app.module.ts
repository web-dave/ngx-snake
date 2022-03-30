import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env, environment } from '../environments/environment';
import { ApiModule } from './api/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_ENDPOINTS } from './core/api_endpoints';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NavigationModule,
    ApiModule.forRoot({ rootUrl: environment.apiUrl }),
    AuthModule.forRoot({
      domain: env.DOMAIN,
      clientId: env.CLIENT_ID,
      audience: env.audience,
      httpInterceptor: {
        allowedList: [...API_ENDPOINTS]
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
