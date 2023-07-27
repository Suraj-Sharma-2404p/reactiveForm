import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  formData = {
    name: '',
    email: '',
    country: '',
    hobby: ''
  };

  countries = ['USA', 'Canada', 'UK', 'Australia'];
  hobbies = ['Reading', 'Music', 'Sports'];

  onSubmit(formValue: any) {
    // Handle form submission logic here
    console.log(formValue);
  }
}
