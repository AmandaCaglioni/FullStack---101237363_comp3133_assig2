import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booked-listing',
  templateUrl: './booked-listing.component.html',
  styleUrls: ['./booked-listing.component.css']
})
export class BookedListingComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.http.post('http://localhost:5000/user/addListing', data).subscribe((result) => {
      alert(result);
    })
    console.log(data)
  }

}
