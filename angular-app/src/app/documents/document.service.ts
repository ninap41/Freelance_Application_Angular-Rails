import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Document } from './document';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DocumentService {
  private documentsURL = 'http://localhost:3002/freelance_documents.json';
  constructor(
    private http: Http
  ) { }

  getDocuments(): Observable<Document[]> {
    return this.http.get(this.documentsURL)
            .map((response: Response) => <Document[]>response.json())
            .catch(this.handleError);
  }
  // BEAUTIFUL ERROR HANDLER
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
