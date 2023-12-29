import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "/jobOffre"},
  {path: "/company"},
  {path: "/agent"},
  {path: "/"},
  {path: "/application"},
  {path: "/listOffre"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
