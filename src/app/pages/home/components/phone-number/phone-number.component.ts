import { Component, OnInit, Input } from '@angular/core';
import { formatPhone } from '../../helpers';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  @Input() phoneNumber: string;
  formattedPhoneNumber: string;
  constructor() {}

  ngOnInit(): void {
    this.formattedPhoneNumber = formatPhone(this.phoneNumber);
  }
}
