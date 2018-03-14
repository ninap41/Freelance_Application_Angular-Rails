import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';

import { ProposalComponent } from './proposal/proposal.component';
import { ProposalService } from './proposal/proposal.service';

import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { ShowProposalComponent } from './show-proposal/show-proposal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, completeWords = false, ellipsis = '') {
    if (completeWords) {
      limit = value.substr(0, 13).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}

@NgModule({
  declarations: [
    TruncatePipe,
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalComponent,
    CreateProposalComponent,
    ShowProposalComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ProposalService,
    DocumentService,
    // services go here.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
