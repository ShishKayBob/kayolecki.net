import { Routes } from '@angular/router';
import { ResumeComponent } from './components/organism/resume/resume.component';
import { HomeComponent } from './components/organism/home/home.component';
import { AboutMeComponent } from './components/organism/about-me/about-me.component';
import { ProjectsComponent } from './components/organism/projects/projects.component';
import { NotFoundComponent } from './components/organism/not-found/not-found.component';
import { ProfessionalComponent } from './components/organism/professional/professional.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/professional', component: ProfessionalComponent },
    { path: '**', component: NotFoundComponent }
];
