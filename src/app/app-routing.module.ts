import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LongUrlComponent } from './long-url/long-url.component';
import { ShortUrlComponent } from './short-url/short-url.component';

const routes: Routes = [
  {path:'', redirectTo:'/url', pathMatch: 'full'},
  {path:'longURL', component:LongUrlComponent},
  {path:'shortURL', component: ShortUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
