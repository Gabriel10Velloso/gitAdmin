import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { GitDashboardComponent } from './git-dashboard/git-dashboard.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: GitDashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
