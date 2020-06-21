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
import { EditQuoteAndSaveRequest } from '../models/edit-quote-and-save-request';
import { EditQuoteAndSaveResponse } from '../models/edit-quote-and-save-response';
import { GetQuoteResponse } from '../models/get-quote-response';

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

  /**
   * Path part for operation apiQuoteGetQuoteGet
   */
  static readonly ApiQuoteGetQuoteGetPath = '/api/Quote/GetQuote';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQuoteGetQuoteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiQuoteGetQuoteGet$Plain$Response(params?: {
    quoteId?: string;

  }): Observable<StrictHttpResponse<GetQuoteResponse>> {

    const rb = new RequestBuilder(this.rootUrl, QuoteService.ApiQuoteGetQuoteGetPath, 'get');
    if (params) {

      rb.query('quoteId', params.quoteId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetQuoteResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiQuoteGetQuoteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiQuoteGetQuoteGet$Plain(params?: {
    quoteId?: string;

  }): Observable<GetQuoteResponse> {

    return this.apiQuoteGetQuoteGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetQuoteResponse>) => r.body as GetQuoteResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQuoteGetQuoteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiQuoteGetQuoteGet$Json$Response(params?: {
    quoteId?: string;

  }): Observable<StrictHttpResponse<GetQuoteResponse>> {

    const rb = new RequestBuilder(this.rootUrl, QuoteService.ApiQuoteGetQuoteGetPath, 'get');
    if (params) {

      rb.query('quoteId', params.quoteId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetQuoteResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiQuoteGetQuoteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiQuoteGetQuoteGet$Json(params?: {
    quoteId?: string;

  }): Observable<GetQuoteResponse> {

    return this.apiQuoteGetQuoteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetQuoteResponse>) => r.body as GetQuoteResponse)
    );
  }

  /**
   * Path part for operation apiQuoteEditQuoteAndSavePost
   */
  static readonly ApiQuoteEditQuoteAndSavePostPath = '/api/Quote/EditQuoteAndSave';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQuoteEditQuoteAndSavePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQuoteEditQuoteAndSavePost$Plain$Response(params?: {
      body?: EditQuoteAndSaveRequest
  }): Observable<StrictHttpResponse<EditQuoteAndSaveResponse>> {

    const rb = new RequestBuilder(this.rootUrl, QuoteService.ApiQuoteEditQuoteAndSavePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EditQuoteAndSaveResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiQuoteEditQuoteAndSavePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQuoteEditQuoteAndSavePost$Plain(params?: {
      body?: EditQuoteAndSaveRequest
  }): Observable<EditQuoteAndSaveResponse> {

    return this.apiQuoteEditQuoteAndSavePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<EditQuoteAndSaveResponse>) => r.body as EditQuoteAndSaveResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQuoteEditQuoteAndSavePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQuoteEditQuoteAndSavePost$Json$Response(params?: {
      body?: EditQuoteAndSaveRequest
  }): Observable<StrictHttpResponse<EditQuoteAndSaveResponse>> {

    const rb = new RequestBuilder(this.rootUrl, QuoteService.ApiQuoteEditQuoteAndSavePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EditQuoteAndSaveResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiQuoteEditQuoteAndSavePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQuoteEditQuoteAndSavePost$Json(params?: {
      body?: EditQuoteAndSaveRequest
  }): Observable<EditQuoteAndSaveResponse> {

    return this.apiQuoteEditQuoteAndSavePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EditQuoteAndSaveResponse>) => r.body as EditQuoteAndSaveResponse)
    );
  }

}
