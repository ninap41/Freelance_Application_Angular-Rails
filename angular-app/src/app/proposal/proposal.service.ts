import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Proposal } from './proposal';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProposalService {
  private proposalsURL = 'http://localhost:3001/proposals';
  constructor(
    private http: Http
  ) { }

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsURL)
            .map((response: Response) => <Proposal[]>response.json())
            .catch(this.handleError);
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsURL + '/' + id + 'json');
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
