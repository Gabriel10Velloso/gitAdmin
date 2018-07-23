import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { MiniSideBarComponent } from './mini-side-bar/mini-side-bar.component';

// SERVICE
import { GithubService } from '../services/github.service';


@NgModule({
    declarations: [
        NopagefoundComponent,
        MiniSideBarComponent,
    ],
    exports: [
        NopagefoundComponent,
        MiniSideBarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule,
        MaterializeModule,
    ],
    providers: [GithubService]
})
export class SharedModule { }
