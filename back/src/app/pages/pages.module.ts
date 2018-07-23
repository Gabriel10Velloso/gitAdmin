import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// FRAMEWORK MATERIALIZEDCSS
import { MaterializeModule } from 'angular2-materialize';

// PAGES_ROUTES
import { PAGES_ROUTES } from './pages.routing';

// COMPONENTS
import { PagesComponent } from './pages.component';
import { GitDashboardComponent } from './git-dashboard/git-dashboard.component';

// MODULE COMPONENTS FILHOS
import { SharedModule } from '../shared/shared.module';

// SERVICE
import { GithubService } from '../services/github.service';

// PIPES
import { GitFilterPipe } from './pipes/gitfilter.pipes';
import { ThousandSuffixesPipe } from './pipes/filterNumber.pipes';
import { PanelReposComponent } from './panel-repos/panel-repos.component';




@NgModule({
    declarations: [
        PagesComponent,
        GitDashboardComponent,
        GitFilterPipe,
        ThousandSuffixesPipe,
        PanelReposComponent,
    ],
    exports: [
        PagesComponent,
        GitDashboardComponent,
        GitFilterPipe,
        ThousandSuffixesPipe,
        PanelReposComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule,
        MaterializeModule,
        SharedModule,
        PAGES_ROUTES
    ],
    providers: [GithubService]
})
export class PagesModule { }
