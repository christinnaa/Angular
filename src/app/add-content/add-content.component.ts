import { Component, OnInit, NgZone } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ThesisService } from './../service/thesis.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
