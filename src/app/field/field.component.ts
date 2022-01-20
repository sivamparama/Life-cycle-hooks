import { Component, OnInit,OnDestroy,OnChanges } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit,OnDestroy,OnChanges {

  name="Angular";
  value:any;
  ngOnInit() {
    console.log("child ngOnInit")
  }
  ngOnDestroy(){
    console.log("child ngOnDestroy");
  }
  ngOnChanges(){
    console.log("child ngOnChanges");
  }


}