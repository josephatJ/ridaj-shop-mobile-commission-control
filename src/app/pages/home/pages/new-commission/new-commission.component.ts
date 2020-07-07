import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { LoadDataService } from 'src/app/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'app-new-commission',
  templateUrl: './new-commission.component.html',
  styleUrls: ['./new-commission.component.css']
})
export class NewCommissionComponent implements OnInit {
  customerId: string;
  errorAlert: string = '';
  commissionFormGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: LoadDataService,
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    let today = new Date();
    this.customerId = this.route.snapshot.params['id'];
    this.commissionFormGroup = this.formBuilder.group({
      customerid: [this.customerId],
      commission: ['', Validators.required],
      customercommission: [''],
      percentused: [10],
      transaction: ['', Validators.required],
      created: [today]
    });
  }

  get commission() {
    return this.commissionFormGroup.get('commission') as FormControl;
  }

  onSubmit(data) {
    console.log('data', data);
  }
}
