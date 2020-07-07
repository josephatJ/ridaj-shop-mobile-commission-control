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
import { loadCommissions } from 'src/app/store/actions';

@Component({
  selector: 'app-new-commission',
  templateUrl: './new-commission.component.html',
  styleUrls: ['./new-commission.component.css']
})
export class NewCommissionComponent implements OnInit {
  customerId: number;
  errorAlert: string = 'Inatakiwa';
  commissionFormGroup: FormGroup;
  maxCommissionId: number;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: LoadDataService,
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    let today = new Date();
    this.maxCommissionId = Number(this.route.snapshot.params['commId']);
    this.customerId = Number(this.route.snapshot.params['id']);
    this.commissionFormGroup = this.formBuilder.group({
      commissionid: [this.maxCommissionId + 1],
      customerid: [this.customerId],
      commission: [0, Validators.required],
      customercommission: [''],
      percentused: [10],
      transaction: ['', Validators.required],
      created: [today]
    });
  }

  get commission() {
    this.commissionFormGroup.value.customercommission =
      this.commissionFormGroup.value.commission * 0.01;
    return this.commissionFormGroup.get('commission') as FormControl;
  }

  get transaction() {
    return this.commissionFormGroup.get('transaction') as FormControl;
  }

  onSubmit(data) {
    this.dataService.saveCommission(data).subscribe(response => {
      this.store.dispatch(loadCommissions());
      this.router.navigate(['customer/' + this.customerId]);
    });
  }
}
