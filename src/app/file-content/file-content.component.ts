import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ThesisService } from '../service/thesis.service';
import { Thesis } from '../interface/Thesis';
import { ActivatedRoute, Router } from "@angular/router";

/**
 * @update Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-file-content',
  templateUrl: './file-content.component.html',
  styleUrls: ['./file-content.component.css']
})

export class FileContentComponent implements OnInit {

  Thesis: Thesis[] = [];

  dataSource: MatTableDataSource<Thesis>;
  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  //columns displayed in the table
  displayedColumns: string[] = ['title', 'author', 'dateApproved', 'actions'];

  constructor(private thesisService: ThesisService, private router: Router
    ) { 
   
  }

  ngOnInit() {

  this.readThesis();
  }

  //reads thesis content to be shown in the table
  readThesis(){
    this.thesisService.getTheses().subscribe((data: Thesis[]) => {
     this.Thesis = data;
     this.dataSource = new MatTableDataSource<Thesis>(this.Thesis);
     setTimeout(() => {
       this.dataSource.paginator = this.paginator;
     }, 0);

    })    
  }

  removeThesis (thesis: { _id: string; }, index: any) {
    if(window.confirm('Are you sure you want to permanently delete this content?')) {
      const data = this.dataSource.data        

          data.splice ((this.paginator.pageIndex * this.paginator.pageSize) +index, 1);
          this.dataSource.data = data;
          this.thesisService.deleteThesis(thesis._id).subscribe()
        }
          
    }
}