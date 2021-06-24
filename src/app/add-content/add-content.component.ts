import { Component, OnInit, NgZone } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Thesis } from '../interface/Thesis';
import { ThesisService } from '../service/thesis.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent {

  submitted = false;
  addForm!: FormGroup;
  thesisData!: Thesis[];
  DeptProfile: any = ['Information Technology', 'Biology', 'Mathematics']

  constructor(public dialog: MatDialog,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private thesisService: ThesisService,
    private router: Router  ) 
    {this.mainForm(); }

    ngOnInit() {}
      
      
    mainForm() {
      this.addForm = this.fb.group({
        title: ['', [Validators.required]],
        author: ['', [Validators.required]],
        description: ['', [Validators.required]],
        department: ['', [Validators.required]],
      })
    }
   
    // Choose options with select-dropdown
  updateProfile(e) {
    this.addForm.get('department').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.addForm.controls;
  }

  

  onSubmit() {
    this.submitted = true;
    if (!this.addForm.valid) {
      return;
    } else {     
          if (window.confirm('Are you sure you want to add this content?')) {
            this.thesisService.CreateThesis(this.addForm.value)
                .subscribe(res => {
                  console.log('Content added successfully!')
                  this.router.navigateByUrl('/content');
                }, (error) => {
                  console.log(error)
                })
          }
      }
    }
  }
    











  // openDialog() {
  //   this.dialog.open(DialogComponent);
  // }


