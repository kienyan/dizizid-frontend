import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmittedComponent } from './submitted/submitted.component';

const routes: Routes = [{ path: 'submitted',component: SubmittedComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
