import { Component, OnInit,ElementRef } from '@angular/core';
import {ConstructionServicesService} from '../services/construction-services.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userContainer:any;
  constructor(private elementRef:ElementRef,private ConstructionServicesService:ConstructionServicesService) { }

  ngOnInit(){
    this.ConstructionServicesService.loginTest().subscribe(i => {
      this.userContainer=i;
    },err => {}); 
  }
  ngAfterViewInit(){
    var jquery=document.createElement('script');
        jquery.src="../assets/js/custom.js";
        this.elementRef.nativeElement.appendChild(jquery);

  }

  deleteTutorial(email) {
    console.log(email);
    this.ConstructionServicesService.delete(email)
      .subscribe(
        response => {
          console.log(response);
          // this.router.navigate(['/admin']);
        },
        error => {
          console.log(error);
        });
  }

}
