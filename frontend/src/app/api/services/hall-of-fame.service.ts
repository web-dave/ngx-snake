/* tslint:disable */
import { HttpClient, HttpResponse } from '@angular/common/http';
/* eslint-disable */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { BaseService } from '../base-service';

import { ScoreEntryDto } from '../models/score-entry-dto';
import { RequestBuilder } from '../request-builder';
import { StrictHttpResponse } from '../strict-http-response';

@Injectable({
  providedIn: 'root',
})
export class HallOfFameService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation hallOfFameControllerGetList
   */
  static readonly HallOfFameControllerGetListPath = '/api/v1/hall-of-fame';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `hallOfFameControllerGetList()` instead.
   *
   * This method doesn't expect any request body.
   */
  hallOfFameControllerGetList$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ScoreEntryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, HallOfFameService.HallOfFameControllerGetListPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ScoreEntryDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `hallOfFameControllerGetList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  hallOfFameControllerGetList(params?: {
  }): Observable<Array<ScoreEntryDto>> {

    return this.hallOfFameControllerGetList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ScoreEntryDto>>) => r.body as Array<ScoreEntryDto>)
    );
  }

  /**
   * Path part for operation hallOfFameControllerAddScoreEntry
   */
  static readonly HallOfFameControllerAddScoreEntryPath = '/api/v1/hall-of-fame';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `hallOfFameControllerAddScoreEntry()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  hallOfFameControllerAddScoreEntry$Response(params: {
    body: ScoreEntryDto
  }): Observable<StrictHttpResponse<ScoreEntryDto>> {

    const rb = new RequestBuilder(this.rootUrl, HallOfFameService.HallOfFameControllerAddScoreEntryPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ScoreEntryDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `hallOfFameControllerAddScoreEntry$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  hallOfFameControllerAddScoreEntry(params: {
    body: ScoreEntryDto
  }): Observable<ScoreEntryDto> {

    return this.hallOfFameControllerAddScoreEntry$Response(params).pipe(
      map((r: StrictHttpResponse<ScoreEntryDto>) => r.body as ScoreEntryDto)
    );
  }

}
