import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  data:any = []
  constructor(private listing : AuthService, private http : HttpClient) {
    this.listing.getBooking().subscribe(data => {
      console.log(data)
      this.data = data;
    })
   }

  ngOnInit(): void {
  }

  delete(id:any){
    this.http.delete(`http://localhost:5000/user/deleteBooking/${id}`).subscribe((result) => {
      alert(result);
    })
    console.log(id)
  }

}
