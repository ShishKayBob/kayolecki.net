import { Routes } from '@angular/router';
import { ResumeComponent } from './components/organism/resume/resume.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/organism/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resume', component: ResumeComponent }
];
