import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkspacesComponent } from './pages/workspaces/workspaces.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    }, 
    
    { 
        path: 'home', 
        component: HomeComponent 
    },

    { 
        path: 'dashboard', 
        component: DashboardComponent 
    },

    {
        path: 'workspaces', 
        component: WorkspacesComponent,
    },

    {
        path: 'workspace/:id',
        component: WorkspaceComponent
    },

    {
        path: 'projects', 
        component: ProjectsComponent 
    },

    {
        path: 'project/:id', 
        component: ProjectComponent 
    },

    { 
        path: 'about', 
        component: AboutComponent 
    },

    { 
        path: '**', 
        component: NotFoundComponent 
    }
];