import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()firstName!:string;
  @Input()lastName!:string;
  @Input()hobbies!:string[];
  @Output() dataToParent: EventEmitter<string> = new EventEmitter();


  sendDataToParent(){
    const data = 'data coming from child to parent on button click';
    this.dataToParent.emit(data);
  }
}
