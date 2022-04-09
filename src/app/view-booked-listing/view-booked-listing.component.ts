import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-view-booked-listing',
  templateUrl: './view-booked-listing.component.html',
  styleUrls: ['./view-booked-listing.component.css']
})
export class ViewBookedListingComponent implements OnInit {

  data:any = []
  constructor(private listing : AuthService) {
    this.listing.getData().subscribe(data => {
      console.log(data)
      this.data = data;
    })
   }

  ngOnInit(): void {
  }

}
