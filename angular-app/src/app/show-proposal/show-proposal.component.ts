import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from '../proposal/proposal';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { ProposalService } from '../proposal/proposal.service';


@Component({
  moduleId: module.id,
  selector: 'app-show-proposal',
  templateUrl: './show-proposal.component.html',
  styleUrls: ['./show-proposal.component.css'],
  providers: [ ProposalService ]
})
export class ShowProposalComponent implements OnInit {


single_proposal = new Proposal;
  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private http: Http

  ) { }

@Input()
proposal: Proposal;

  ngOnInit(): void {
    const proposalRequest = this.route.params
    .flatMap((params: Params) =>
    this.proposalService.getProposal(+params['id']));
  proposalRequest.subscribe(response => this.proposal = response.json());

  }
}
