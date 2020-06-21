/* tslint:disable */
import { QuoteDto } from './quote-dto';
export interface GetQuoteResponse {
  errorMessage?: null | string;
  isSuccess?: boolean;
  quote?: QuoteDto;
}
