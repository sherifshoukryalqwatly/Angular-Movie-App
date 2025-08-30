import { MoveDetails } from './components/move-details/move-details';
import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Movies } from './components/movies/movies';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  {path:"",component:Main,
    children:[
      {path:"",redirectTo:'/home',pathMatch:'full'},
      {path:'home',component:Home,title:"Home Page"},
      {path:"movies",component:Movies,title:"Movies Page"},
      {path:"movies/:id",component:MoveDetails,title:"Movies Details Page"},
      {path:"about-us",component:About,title:"About Page"},
      {path:"contact",component:Contact,title:"Contact Page"},
    ]
  },
  {path:"login",component:Login,title:"Login Page"},
  {path:"**",component:NotFound,title:"Not Found Page"}
];
