import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-commission',
  templateUrl: './new-commission.component.html',
  styleUrls: ['./new-commission.component.css']
})
export class NewCommissionComponent implements OnInit {
  customerId: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
  }
}
