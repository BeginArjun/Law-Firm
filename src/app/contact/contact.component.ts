import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    emailAddress:new FormControl('',Validators.email),
    phoneNumber:new FormControl('',Validators.maxLength(10)),
    message:new FormControl('',Validators.required)
  })
  constructor(){
  }
  onSubmit(){
    this.contactForm.valid?alert('Your Message Has been Sent!'):alert('Some Error Occured! Invalid Input')
  }
}
