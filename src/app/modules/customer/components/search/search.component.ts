import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data:any = []
  objectKeys = Object.keys;
  constructor(private http : HttpClient, private listing : AuthService) {
    this.listing.getListing().subscribe(data => {
      console.log(data)
      this.data = data;
      
    })
   }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.http.post('http://localhost:5000/user/search', data).subscribe((result) => {
      console.log(result);
      //this.data = result;
      // this.data = Object.values(result);
      // console.log(this.data)
      this.data.unshift(result);
    })
    console.log(data)
  }

}
