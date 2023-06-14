import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  @Input() user: any; 
  book_a_desk_open: boolean = true;
  booking: any = {
    desk: 0 // Initialize the desk property to null
  };
  showDropdown: boolean = false;
  desks: any[] = [
    { id: 1, name: 'Desk 1' },
    { id: 2, name: 'Desk 2' },
    { id: 3, name: 'Desk 3' }
  ];
  
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private datePipe: DatePipe) { }
  ngOnInit() {
    this.booking.email = this.user.email;
    //const user = this.auth.user$; 
    this.booking.date_from = new Date().toISOString().substring(0, 10)
  }


  toggleDropdown() {
    console.log('toggleDropdown')
    this.showDropdown = !this.showDropdown;
    console.log(this.showDropdown)

  }

  selectDesk(deskId: number) {
    console.log('selectDesk')
    this.booking.desk = deskId;
    this.showDropdown = false;
  }

  getDeskName(deskId: number): string {
    console.log("getDeskName")
    const desk = this.desks.find(desk => desk.id === deskId);
    return desk ? desk.name : '';
  }
  submitForm() {
    // Perform any additional validation or processing here
    console.log(this.booking);
  }
}
