import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  hobbies!: string[];
  datareceived!: string;

  ngOnInit(): void {
    this.firstName = "suraj";
    this.lastName = "suraj";
    this.hobbies = new Array<string>("sleeping","Sleeping","sleeping");
  }

  handleDataFromChild(data :string){
    console.log(data);
    this.datareceived = data;
  }
}
