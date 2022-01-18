/* tslint:disable */
import { HttpClient, HttpResponse } from '@angular/common/http';
/* eslint-disable */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { BaseService } from '../base-service';

import { PingResponse } from '../models/ping-response';
import { RequestBuilder } from '../request-builder';
import { StrictHttpResponse } from '../strict-http-response';

@Injectable({
  providedIn: 'root',
})
export class SystemService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation systemControllerPing
   */
  static readonly SystemControllerPingPath = '/api/v1/system/ping';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemControllerPing()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemControllerPing$Response(params?: {
  }): Observable<StrictHttpResponse<PingResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SystemService.SystemControllerPingPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PingResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemControllerPing$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemControllerPing(params?: {
  }): Observable<PingResponse> {

    return this.systemControllerPing$Response(params).pipe(
      map((r: StrictHttpResponse<PingResponse>) => r.body as PingResponse)
    );
  }

}
