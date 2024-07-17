import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  register = new FormGroup({
    name: new FormControl("",[Validators.required]),
    no: new FormControl("",[Validators.required]),
    id: new FormControl("",[Validators.required])
    
  })

  onSubmit(){
    if(this.register.valid){
      alert("Register is succussfully")
      console.log(this.register.value)
    }
   else{
    alert("Register field must be required" )
    console.log(this.register.value)
   }
  }

  constructor(){

  }

}