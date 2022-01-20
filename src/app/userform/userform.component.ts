import { Component, OnInit,OnDestroy,OnChanges } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit,OnDestroy,OnChanges {

  name="Angular";

  ngOnInit() {
    console.log("parent ngOnInit");
  }
  ngOnDestroy(){
    console.log("parent ngOnDestroy");
  }
  ngOnChanges(){
    console.log("parent ngOnChanges");
  }


}