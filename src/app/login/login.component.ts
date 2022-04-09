import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private http : HttpClient, private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(data:any){
    console.log(this.loginForm.value)
    this.http.post('http://localhost:5000/user/login', data).subscribe((result) => {
      //alert("Login Successfull");
      if(result == 'admin')
      {
        if (this.loginForm.valid) {
          this.auth.customerlogin(result).subscribe(
            (result) => {
              this.router.navigate(['admin']);
            }, 
            (err) => alert(err.message))
        }
      }
      if(result == 'customer')
      {
        if (this.loginForm.valid) {
          this.auth.customerlogin(result).subscribe(
            (result) => {
              this.router.navigate(['customer']);
            }, 
            (err) => alert(err.message))
        }
      }
      
    })
    
  }

}
