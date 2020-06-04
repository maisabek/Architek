import { Component, OnInit, ɵConsole } from '@angular/core';
import {user} from './user';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ConstructionServicesService} from '../services/construction-services.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   newuser:user=new user();
   submitted = false
   users:user[];
    contactform=new FormGroup({
     name:new FormControl('',Validators.required),
     email:new FormControl('',Validators.email),
     pass:new FormControl('',Validators.required),
     conpass:new FormControl('',Validators.required)
   })

  constructor(private ConstructionServicesService:ConstructionServicesService) {}

  ngOnInit() {}
  createUser(){
   const data={
     name:this.newuser.name,
     email:this.newuser.email,
     password:this.newuser.password,
     conpass:this.newuser.conpass
   };
   console.log(data);
   this.ConstructionServicesService.userRegister(data).subscribe(
    response => {
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });
}
newTutorial() {
  this.submitted = false;
  this.newuser = {
  name: '',
  email: '',
  password: '',
  conpass: '',
  };
  
}

}
