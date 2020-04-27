import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './crudFeature/parent/parent/parent/parent.component';
import { AddDetailsComponent } from './crudFeature/parent/parent/add-details/add-details.component';
import { AddMoreDetailsComponent } from './crudFeature/parent/parent/add-more-details/add-more-details.component';

const routes: Routes = [
  { path: '', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
