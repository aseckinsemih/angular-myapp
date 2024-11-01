import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
    {
        path: "", redirectTo: "/login",pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent,
    },
    {
        path:'signup',
        component: SignupComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule {}
