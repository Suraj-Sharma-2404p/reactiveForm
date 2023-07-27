import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit  {

  myForm!: FormGroup;

  constructor(private formbuilder:FormBuilder){}

  ngOnInit(): void {
   this.myForm = this.formbuilder.group({
    name:'',
    email:'',
    gender:'',
    country:'',
    hobbies:this.formbuilder.group({
      reading:false,
      music:false,
      sports:false
    })
   });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log(this.myForm.value);
  }


}
