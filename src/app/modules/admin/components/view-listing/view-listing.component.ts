import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit {

  data:any = []
  constructor(private listing : AuthService, private http : HttpClient) {
    this.listing.getData().subscribe(data => {
      console.log(data)
      this.data = data;
    })
   }

  ngOnInit(): void {
  }

  delete(id:any){
    this.http.delete(`http://localhost:5000/user/deleteListing/${id}`).subscribe((result) => {
      alert(result);
    })
    console.log(id)
  }

}
