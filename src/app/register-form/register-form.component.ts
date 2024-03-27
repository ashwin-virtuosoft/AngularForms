import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  RegisterForm: FormGroup;

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, this.onlyLetters]),
      lastName: new FormControl('', [Validators.required, this.onlyLetters]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, this.phoneNo])
    });
  }

  onSubmit() {
    if (this.RegisterForm.valid) {
      alert("Registered");
      console.log(this.RegisterForm.value);
    } else {
      alert("Form has errors. Please check.");
    }
  }

  // noSpaceAllowed(control: FormControl) {
  //   if (control.value != null && control.value.trim() === '') {
  //     return { noSpaceAllowed: true };
  //   }
  //   return null;
  // }

  onlyLetters(control:FormControl){
    if(!/^[a-zA-Z]*$/.test(control.value)){
      return {onlyLetters:true}
    }
    return null;
  }

  phoneNo(control: FormControl) {
    if (control.value != null && control.value.toString().length > 10) {
      return { phoneNo: true };
    }
    return null;
  }
}
