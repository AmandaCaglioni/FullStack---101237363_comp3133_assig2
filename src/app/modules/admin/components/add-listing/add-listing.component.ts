import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

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
