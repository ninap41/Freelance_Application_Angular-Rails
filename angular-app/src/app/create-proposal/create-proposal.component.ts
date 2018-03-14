import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { ProposalComponent } from '../proposal/proposal.component';
import { ProposalService } from '../proposal/proposal.service';

import { Proposal } from '../proposal/proposal';

@Component({
  moduleId: module.id,
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {
  proposal = new Proposal;
  constructor() { }

  ngOnInit() {
  }

}
