import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../../../app/state/app.state';

@Component({
  selector: 'app-add-more-details',
  templateUrl: './add-more-details.component.html',
  styleUrls: ['./add-more-details.component.scss']
})
export class AddMoreDetailsComponent implements OnInit {
  profileMoreInfoForm;
  constructor(private formBuilder: FormBuilder, private store: Store<State>) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileMoreInfoForm = this.formBuilder.group({
      prevCompanyName: ['', Validators.required],
      expectedsalary: ['', Validators.required ]
    });
  }

  previous() {
    this.store.dispatch({
      type: 'UPDATE PAGE',
      payload: 'DETAILS'
    });
  }
}
