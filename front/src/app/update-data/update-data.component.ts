import { Component, OnInit } from '@angular/core';
import {ConstructionServicesService} from '../services/construction-services.service'
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {user} from './user'
@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {

  constructor(private ConstructionServicesService:ConstructionServicesService,private _ActivatedRoute: ActivatedRoute,private router: Router){}
  currentTutorial = null;
  message = '';
  newuser:user=new user();
  submitted = false
  users:user[];
   contactform=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    pass:new FormControl('',Validators.required),
    conpass:new FormControl('',Validators.required)
  });
  myparam:String;

  ngOnInit(){
   this.message = '';
   this._ActivatedRoute.params.subscribe((params) => this.myparam =params['email']);
    console.log("this.currentTutorial"+this.myparam);
  }

  getTutorial(email) {
    this.ConstructionServicesService.get(email)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }

  updateTutorial(){
    const data={
      name:this.newuser.name,
      email:this.newuser.email,
      password:this.newuser.password,
      conpass:this.newuser.conpass
    };
    this.ConstructionServicesService.update(this.myparam, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
        this.router.navigate(['/admin']);
  }

}
