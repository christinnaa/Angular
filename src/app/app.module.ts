import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { FileContentComponent } from './file-content/file-content.component';
import { ViewContentComponent } from './view-content/view-content.component';
import { AddContentComponent } from './add-content/add-content.component';

//material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//service
import { ThesisService } from './service/thesis.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    FileContentComponent,
    ViewContentComponent,
    AddContentComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [ThesisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
