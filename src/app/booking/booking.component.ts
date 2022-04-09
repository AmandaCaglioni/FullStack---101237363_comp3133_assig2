import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.http.post('http://localhost:5000/user/addBooking', data).subscribe((result) => {
      alert(result);
    })
    console.log(data)
  }

}
