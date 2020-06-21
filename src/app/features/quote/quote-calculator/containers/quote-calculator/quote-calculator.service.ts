import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { QuoteDto } from 'src/app/api/models';
import { QuoteService } from 'src/app/api/services/quote.service';
import { EditQuoteAndSaveRequest } from 'src/app/api/models/edit-quote-and-save-request';
import { EditQuoteAndSaveResponse } from 'src/app/api/models/edit-quote-and-save-response';

@Injectable()
export class QuoteCalculatorService {
  public quoteBehaviorSubject: BehaviorSubject<QuoteDto>;
  public quote: Observable<QuoteDto>;

  constructor(private quoteService: QuoteService) {
    this.quoteBehaviorSubject = new BehaviorSubject<QuoteDto>(null);
    this.quote = this.quoteBehaviorSubject.asObservable();
  }

  getQuoteAsync() {
    return new Promise<QuoteDto>((resolve) => {
      resolve(this.quoteBehaviorSubject.value);
    });
  }

  loadQuote(quoteId: string) {
    return new Promise<QuoteDto>((resolve, reject) => {
      this.quoteBehaviorSubject.next(null);
      return this.quoteService.apiQuoteGetQuoteGet$Json({ quoteId }).subscribe(
        r => {
          if (r.isSuccess) {
            this.quoteBehaviorSubject.next(r.quote);
            resolve(this.quoteBehaviorSubject.value);
          }
        }
      );
    });
  }

  updateQuote(quote: QuoteDto) {
    this.quoteBehaviorSubject.next(quote);
  }

  saveQuote() {
    return new Promise<EditQuoteAndSaveResponse>((resolve, reject) => {
      const request: EditQuoteAndSaveRequest = {};
      request.quote = this.quoteBehaviorSubject.value;
      this.quoteService.apiQuoteEditQuoteAndSavePost$Json({body: request}).subscribe(
        r => {
          if (r.isSuccess) {
            resolve(r);
          }
          else {
            reject(r);
          }
        }
      );
    });
  }
}
