

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
proposals: Proposal[];
errorMessage: string;
mode = 'Observable';

  constructor(
    private proposalService: ProposalService,
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
}
