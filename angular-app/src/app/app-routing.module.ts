import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalComponent } from './proposal/proposal.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { ShowProposalComponent } from './show-proposal/show-proposal.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'proposals', component: ProposalComponent },
    { path: 'create', component: CreateProposalComponent },
    { path: 'proposals/:id', component: ShowProposalComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
