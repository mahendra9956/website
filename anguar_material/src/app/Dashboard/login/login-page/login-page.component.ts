import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {



 login :FormGroup;

 constructor(private fb:FormBuilder,private router:Router){
  this.login=this.fb.group({
    email: ["",[Validators.email,Validators.required]],
    password:["",[Validators.minLength(10),Validators.required]]
  })

 }
  onSubmit(){
    if(this.login.valid){
      alert("Login is Succss")
      this.router.navigateByUrl('/admin')
    }
    else{
      alert("first go to register page after login")
    }
  }
}
