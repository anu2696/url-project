import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LongUrlComponent } from './long-url/long-url.component';
import { ShortUrlComponent } from './short-url/short-url.component';

const routes: Routes = [
 // {path:'/url', redirectTo:'/url', pathMatch: 'full'},
  {path:'url', component:AppComponent},
  {path:'longURL', component:LongUrlComponent},
  {path:'shortURL', component: ShortUrlComponent},
  {path:'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
