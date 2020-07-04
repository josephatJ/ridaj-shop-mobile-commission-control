import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { formatDateYYMMDD } from '../../helpers';
import { LoadDataService } from 'src/app/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadCustomers } from 'src/app/store/actions';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  customerFormGroup: FormGroup;
  validation_messages: any[] = [
    { type: 'required', message: 'Simu inatakiwa' },
    { type: 'pattern', message: 'Ingiza simu kwa usahihi' }
  ];
  errorAlert: string = 'Inatakiwa';
  phoneNumber: string = '^(+d{1,3}[- ]?)?d{12}$';
  constructor(
    private formBuilder: FormBuilder,
    private dataService: LoadDataService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    let today = new Date();
    this.customerFormGroup = this.formBuilder.group({
      phone: ['', Validators.required],
      provider: [''],
      active: [true],
      created: [today]
    });
  }

  get phone() {
    return this.customerFormGroup.get('phone') as FormControl;
  }

  toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }

  onSubmit(data) {
    console.log('data', data);
    let formattedData = {
      customerid: Number(this.route.snapshot.params['id']),
      phone: data.phone,
      provider: 'VodaCom',
      active: true,
      created: data.created
    };
    this.dataService.saveCustomer(formattedData).subscribe(response => {
      console.log('response', response);
      this.store.dispatch(loadCustomers());
      this.router.navigate(['customers']);
    });
  }

  keyPress(event: any) {
    console.log(event);
    console.log(this.customerFormGroup);
    // const pattern = /[0-9\+\-\ ]/;
    // const inputChar = String.fromCharCode(event.charCode);
    // console.log('inputChar', inputChar);
    // if (event.key != 8 && !pattern.test(inputChar)) {
    //   event.preventDefault();
    // }
  }
}
