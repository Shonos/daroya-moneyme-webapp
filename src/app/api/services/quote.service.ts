/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateQuoteRequest } from '../models/create-quote-request';
import { CreateQuoteResponse } from '../models/create-quote-response';

@Injectable({
  providedIn: 'root',
})
export class QuoteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiQuoteCreateQuotePost
   */
  static readonly ApiQuoteCreateQuotePostPath = '/api/Quote/CreateQuote';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQuoteCreateQuotePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQuoteCreateQuotePost$Plain$Response(params?: {
      body?: CreateQuoteRequest
  }): Observable<StrictHttpResponse<CreateQuoteResponse>> {

    const rb = new RequestBuilder(this.rootUrl, QuoteService.ApiQuoteCreateQuotePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreateQuoteResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiQuoteCreateQuotePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQuoteCreateQuotePost$Plain(params?: {
      body?: CreateQuoteRequest
  }): Observable<CreateQuoteResponse> {

    return this.apiQuoteCreateQuotePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CreateQuoteResponse>) => r.body as CreateQuoteResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQuoteCreateQuotePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQuoteCreateQuotePost$Json$Response(params?: {
      body?: CreateQuoteRequest
  }): Observable<StrictHttpResponse<CreateQuoteResponse>> {

    const rb = new RequestBuilder(this.rootUrl, QuoteService.ApiQuoteCreateQuotePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreateQuoteResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiQuoteCreateQuotePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQuoteCreateQuotePost$Json(params?: {
      body?: CreateQuoteRequest
  }): Observable<CreateQuoteResponse> {

    return this.apiQuoteCreateQuotePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CreateQuoteResponse>) => r.body as CreateQuoteResponse)
    );
  }

}
