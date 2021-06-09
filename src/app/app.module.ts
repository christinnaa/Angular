import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { FileContentComponent } from './file-content/file-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ViewContentComponent } from './view-content/view-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    FileContentComponent,
    SideBarComponent,
    ViewContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
