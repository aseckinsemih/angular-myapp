import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DefaultLoginLayoutComponent } from '../default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../primary-input-component/primary-input-component.component';
import { confirmpasswordvalidator } from '../confirm-password.validator';


interface SignupForm {
  name:FormControl,
  email:FormControl,
  password:FormControl,
  passwordconfirm:FormControl,
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers:[
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
signupForm!: FormGroup<SignupForm>;
  

 constructor(
  private router: Router,
  private loginservice:LoginService,
  private toastservice: ToastrService
 ){
  this.signupForm=new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    passwordconfirm: new FormControl('',[Validators.required,Validators.minLength(6)]),
    
  },{  validators: confirmpasswordvalidator});
}





submit() {
  this.loginservice.login(
    this.signupForm.value.email,
    this.signupForm.value.password
  ).subscribe({
    next:() => this.toastservice.success("login completed"),
    error: () => this.toastservice.error("error")
  })
}

navigate(){
  this.router.navigate(['login'])
}
}
