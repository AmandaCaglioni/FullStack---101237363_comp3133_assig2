import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http : HttpClient, private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.logout();
  }

}
