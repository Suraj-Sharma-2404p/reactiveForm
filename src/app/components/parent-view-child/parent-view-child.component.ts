import { Component, ViewChild } from '@angular/core';
import { ChildViewChildComponent } from '../child-view-child/child-view-child.component';

@Component({
  selector: 'app-parent-view-child',
  templateUrl: './parent-view-child.component.html',
  styleUrls: ['./parent-view-child.component.css'],
})
export class ParentViewChildComponent {
  @ViewChild('childValue') childviewComponent!: ChildViewChildComponent;
  receivedData!: string;

  getChildValue() {
    this.receivedData = this.childviewComponent.childValue;
  }
}
