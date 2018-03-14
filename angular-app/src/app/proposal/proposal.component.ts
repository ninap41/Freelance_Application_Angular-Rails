

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/timer';
import { HomepageComponent } from '../homepage/homepage.component';
import { DocumentsComponent } from '../documents/documents.component';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';


@Component({
  moduleId: module.id,
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  private proposalsURL = 'http://localhost:3001/proposals';
proposals: Proposal[];
proposal: Proposal;
errorMessage: string;
mode = 'Observable';

  constructor(
    private proposalService: ProposalService,
    private _router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private httpOptions: RequestOptions
  ) {
  }
  ngOnInit() {
     const timer = Observable.timer(0, 5000);
     timer.subscribe(() => this.getProposals());
  }
  getProposals() {
    this.proposalService.getProposals()
      .subscribe( // from proposal service => empty proposal list above = proposal model
        proposals => this.proposals = proposals,
        error => this.errorMessage = <any>error
      );

  }
  gotoShow(proposal: Proposal): void {
     const link = ['/proposal' + proposal.id];
     this._router.navigate(link);
  }
  delete(prop: Proposal) {
    this.proposalService.deleteProposal(prop.id)
    .subscribe(data => { console.log('ahh'); },
      error => this.errorMessage = error);
  }



}
