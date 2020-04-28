import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { FooterModule } from '../../../footer/footer/index';
import { HeaderModule } from '../../../header/header/index';
import { AddDetailsComponent } from './add-details/add-details.component';
import { AddMoreDetailsComponent } from './add-more-details/add-more-details.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { reducer } from '../../state/crud.reducers';

@NgModule({
  declarations: [ParentComponent, AddDetailsComponent, AddMoreDetailsComponent, ReviewDetailsComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    ReactiveFormsModule,
    StoreModule.forFeature('employee', reducer)
  ]
})
export class ParentModule { }
