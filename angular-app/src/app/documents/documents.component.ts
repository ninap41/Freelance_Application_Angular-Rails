import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/timer';
import { HomepageComponent } from '../homepage/homepage.component';
import { ProposalComponent } from '../proposal/proposal.component';
import { Document } from './document';
import { Pipe, PipeTransform } from '@angular/core';
import { DocumentService } from './document.service';


@Component({
  moduleId: module.id,
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  providers: [ DocumentService ],
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
documents: Document[];
errorMessage: string;
mode = 'Observable';

  constructor(
    private documentService: DocumentService,
  ) {
  }
  ngOnInit() {
     const timer = Observable.timer(0, 5000);
     timer.subscribe(() => this.getDocuments());
  }
  getDocuments() {
    this.documentService.getDocuments()
      .subscribe( // from document service => empty document list above = document model
        documents => this.documents = documents,
        error => this.errorMessage = <any>error
      );
  }
}
