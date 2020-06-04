import { Component, OnInit ,ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ConstructionServicesService} from '../services/construction-services.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   contactsForm=new FormGroup({
     email:new FormControl(Validators.required),
     password:new FormControl(Validators.required)
   })
  public userName;
  public password;
  allUser:any=[];
  email='';
  pass='';
  flag:boolean=false;
  

  constructor(private elementRef:ElementRef,private ConstructionServicesService:ConstructionServicesService,private route:Router) { }
  ngOnInit() {}
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.src='../assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }
  registeredUser(){
 let {email,pass}= this;
 this.ConstructionServicesService.loginTest().subscribe(data=> {
        for (const d of (data as any)) {
          this.allUser.push({
            userName: d.email,
            password: d.password
      });
      this.userName=d.email;
      this.password=d.password;
      // this.map.id=d.idd;
      if(email==this.userName && pass== this.password){
        console.log(email+' password -'+pass);
        console.log("userName="+this.userName);
        console.log("password="+this.password);
        this.flag=true;
        break;
     }else{
      this.flag=false;
       continue;
     }
        }
        if(this.flag == true){
          this.route.navigate(['/home']);
        }else{
          alert("authentication faild");
          console.log(this.flag)
          console.log(this.allUser);
        }       
      });
    }
    }
