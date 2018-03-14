import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Proposal } from './proposal';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProposalService {
  headers: Headers;
  options: RequestOptions;
  proposal: Proposal;
  private proposalsURL = 'http://localhost:3001/proposals';
  constructor(
    private http: Http
  ) {
    this.headers = new Headers({ 'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers });
  }

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsURL)
            .map((response: Response) => <Proposal[]>response.json())
            .catch(this.handleError);
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsURL + '/' + id + 'json');
  }
  createProposal(proposal: Proposal): Observable<Proposal> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.proposalsURL, JSON.stringify(proposal),
  this.options).map((res: Response) => res.json());
  }

  deleteProposal(id: number): Observable<Proposal> {
    const url = `${this.proposalsURL}/${id}`;
      return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
  // BEAUTIFUL ERROR HANDLER
  private handleError(error: any): Promise<any> {
    console.error('An error occured ', error);
    return Promise.reject(error.message || error);
  }
}
