import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {path :'login',component:LoginComponent},
  {path :'',component: HomeComponent},
  // {path :'movie',component: MovieComponent},login
  // {path:'**',component:LoginComponent},
  {path :'register',component: RegisterComponent},
  {path :'room',component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
