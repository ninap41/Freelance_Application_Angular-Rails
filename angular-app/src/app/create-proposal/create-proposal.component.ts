import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { ProposalComponent } from '../proposal/proposal.component';
import { ProposalService } from '../proposal/proposal.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Proposal } from '../proposal/proposal';

@Component({
  moduleId: module.id,
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css'],
  providers: [ ProposalService ]
})
export class CreateProposalComponent implements OnInit {
  submitted: Boolean = false;
  proposal = new Proposal;
  constructor(
    private proposalService: ProposalService
  ) { }

  ngOnInit() {
  }
  createProposal(proposal) {
    this.submitted = true;
    this.proposalService.createProposal(proposal).subscribe(data => { return true },
      error => {
        console.log("Error saving proposal");
        return Observable.throw(error);
      }
    );
  }
}
