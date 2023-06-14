import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-pin',
  templateUrl: './personal-pin.component.html',
  styleUrls: ['./personal-pin.component.css']
})
export class PersonalPinComponent {
  @Input() user :any; // decorate the property with @Input()
  pin_open: boolean = true;

  //ngOnInit() {
  //  this.user.s
  //}
}
