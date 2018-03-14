import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentsComponent } from '../documents/documents.component';
import { HomepageComponent } from './homepage.component';
import { ProposalComponent } from '../proposal/proposal.component';


describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
