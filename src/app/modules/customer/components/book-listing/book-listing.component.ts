import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {

  data:any = []
  constructor(private listing : AuthService, private http : HttpClient) {
    this.listing.getData().subscribe(data => {
      console.log(data)
      this.data = data;
    })
   }

   date1 = new Date();
   currentYear = this.date1.getUTCFullYear();
   currentMonth = this.date1.getUTCMonth() + 1;
   currentDay = this.date1.getUTCDate();


   FinalMonth : any;
   FinalDay: any;

   TodayDate = "2022-4-4";

  ngOnInit(): void {
    if(this.currentMonth < 10){
      this.FinalMonth = "0" + this.currentMonth;
    }
    else{
      this.FinalDay = this.currentDay;
    }
    this.TodayDate = this.currentYear + "-" + this.FinalMonth + "-" + this.FinalDay; 
  }


  onsubmit(data:any, id:any, username:any){
    data = {id, ...data, username}
    this.http.post('http://localhost:5000/user/addBooking', data).subscribe((result) => {
      alert(result);
    })
    console.log(data)
  }

}
