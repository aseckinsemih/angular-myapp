import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr'
import { DefaultLoginLayoutComponent } from '../default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../primary-input-component/primary-input-component.component';
interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers:[
    LoginService
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginform!:FormGroup<LoginForm>;

  constructor(
    private router:Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginform=new FormGroup({
     email: new FormControl('', [Validators.required,Validators.email]),
     password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
  
  }
submit(){
  this.loginService.login(
  this.loginform.value.email,
  this.loginform.value.password
  ).subscribe({
    next: () => this.toastService.success("Login successfully"),
    error: () => this.toastService.error("login failed")
  })
}
navigate() {
  this.router.navigate(["signup"])
}

}
