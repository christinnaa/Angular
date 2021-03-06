import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { FileContentComponent } from './file-content/file-content.component';
import { ViewContentComponent } from './view-content/view-content.component';
import { AddContentComponent } from './add-content/add-content.component';

//setting up the routes for the project
//these are configured in the html of a specific compoenent like [routerLink]="'/content'"
const routes: Routes = [	{
  path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'content', component: FileContentComponent },
{ path: 'add', component: AddContentComponent },
{ path: 'login', component: LogInComponent },
{ path: 'view-content/:id', component: ViewContentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
