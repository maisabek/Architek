import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import {UpdateDataComponent} from './update-data/update-data.component'


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'register',component:RegisterComponent},
  {path:'update/:email',component:UpdateDataComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
