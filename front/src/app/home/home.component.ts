import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.src='../assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }

}
