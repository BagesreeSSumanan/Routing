import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authService.service';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hardcodedUsername : string = 'admin';
  hardcodedPassword :string = '12345';
  username: string ='';
  password: string ='';
  Islogged : boolean = false;
  constructor( private router: Router, private authService:AuthService ) {}

  submitLogin(){
    if (this.username === this.hardcodedUsername && this.password === this.hardcodedPassword){
     this.Islogged = true;
     this.authService.setLoginStatus(this.Islogged);
     this.router.navigate(['']);
    }
    else{
      this.Islogged = false;
      this.authService.setLoginStatus(this.Islogged);
      alert("Invalid credentials")
    }
  }
}
