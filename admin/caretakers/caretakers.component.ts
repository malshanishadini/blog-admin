import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Admininfo } from '../admininfo';
import { AdminserviceService } from '../adminservice.service';
import { PauthService } from 'src/app/auth/pauth.service';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-caretakers',
  templateUrl: './caretakers.component.html',
  styleUrls: ['./caretakers.component.scss']
})
export class CaretakersComponent implements OnInit {
  nannies: Observable<Admininfo[]>

  displayedColumns: string[] = ['name', 'email', 'gender', 'number'];
  dataSource: MatTableDataSource<Admininfo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private AdminserviceService: AdminserviceService, public auth: PauthService) { 
     
  }

  ngOnInit() {
    this.nannies = this.AdminserviceService.getNanny()
    console.log(this)

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

