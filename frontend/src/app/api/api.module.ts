/* tslint:disable */
import { HttpClient } from '@angular/common/http';
/* eslint-disable */
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';
import { HallOfFameService } from './services/hall-of-fame.service';

import { SystemService } from './services/system.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    SystemService,
    HallOfFameService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
