import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { formatCommissions } from '../../helpers';

@Component({
  selector: 'app-commissions-list',
  templateUrl: './commissions-list.component.html',
  styleUrls: ['./commissions-list.component.css']
})
export class CommissionsListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() commissions: any;
  @Input() customerId: string;
  displayedColumns: string[] = [
    'no',
    'created',
    'commission',
    'percentused',
    'customercommission'
  ];
  dataSource: any;
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(
      formatCommissions(this.commissions)
    );
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
