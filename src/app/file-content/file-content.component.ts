import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  title: string;
  department: string;
  upload: string;
  update: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, department: 'IT', title: 'v1-babokfriends-project-proposal.pdf', upload: 'June 02, 2021', update: 'June 07, 2021'},
  {id: 2, department: 'IT', title: 'Sample Research Document.pdf', upload: 'June 02, 2021', update: 'June 05, 2021'},
  {id: 3, department: 'BIO', title: 'Sample Research Document (1).pdf', upload: 'June 01, 2021', update: 'June 08, 2021'},
  {id: 4, department: 'BIO',title: 'Sample Research Document (2).pdf', upload: 'May 28, 2021', update: 'May 29, 2021'},
  {id: 5, department: 'MATH', title: 'Sample Research Document (3).pdf', upload: 'May 26, 2021', update: 'June 02, 2021'},
  {id: 6, department: 'BIO  ',title: 'Sample Research Document (4).pdf', upload: 'May 30, 2021', update: 'June 05, 2021'},
  {id: 7, department: 'MATH', title: 'Sample Research Document (5).pdf', upload: 'June 01, 2021', update: 'June 06, 2021'},
  {id: 8, department: 'BIO', title: 'Sample Research Document (6).pdf', upload: 'June 02, 2021', update: 'June 07, 2021'},
  {id: 9, department: 'BIO', title: 'Sample Research Document (7).pdf', upload: 'June 02, 2021', update: 'June 08, 2021'},
  {id: 10, department: 'MATH', title: 'Sample Research Document (8)', upload: 'June 01, 2021', update: 'June 09, 2021'},
];

/**
 * @update Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-file-content',
  templateUrl: './file-content.component.html',
  styleUrls: ['./file-content.component.css']
})
export class FileContentComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'department', 'upload', 'update'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}}
