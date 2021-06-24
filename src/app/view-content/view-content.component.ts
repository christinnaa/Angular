import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Thesis } from '../interface/Thesis';
import { ThesisService } from '../service/thesis.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent implements OnInit {

  submitted = false;
  editForm!: FormGroup;
  thesisData!: Thesis[];
  DeptProfile: any = ['Information Technology', 'Biology', 'Mathematics']

  constructor(public dialog: MatDialog,
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private thesisService: ThesisService,
    private router: Router  ) { 
    }

    ngOnInit() {
      this.updateThesis();
      let id = String(this.actRoute.snapshot.paramMap.get('id'));
      
      this.getThesis(id);
      this.editForm = this.fb.group({
        title: ['', [Validators.required]],
        author: ['', [Validators.required]],
        description: ['', [Validators.required]],
        department: ['', [Validators.required]],
      })
    }
   
    // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('department').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getThesis(id: string) {
    this.thesisService.getThesis(id).subscribe(data => {
      this.editForm.setValue({
        title: data['title'],
        author: data['author'],
        department: data['department'],
        description: data['description'],
      });
    });
  }

  updateThesis() {
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      department: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return;
    } else {
      if (window.confirm('Do you want to update any changes to this content?')) {
        let id = String (this.actRoute.snapshot.paramMap.get('id'));
        this.thesisService.updateThesis(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/content');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
    
}



//   openDialog() {
//     this.dialog.open(DialogComponent);
//  }
// }
 

