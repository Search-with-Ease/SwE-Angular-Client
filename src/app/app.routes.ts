import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkspacesComponent } from './pages/workspaces/workspaces.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guard/auth.guard';

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
        path: 'login', 
        component: LoginComponent 
    },

    { 
        path: 'register', 
        component: RegisterComponent 
    },

    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'workspaces', 
        component: WorkspacesComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'workspace/:id',
        component: WorkspaceComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'projects', 
        component: ProjectsComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'project/:id', 
        component: ProjectComponent,
        canActivate: [AuthGuard]
    },

    { 
        path: 'about', 
        component: AboutComponent,
        canActivate: [AuthGuard]
    },

    { 
        path: '**', 
        component: NotFoundComponent
    }
];