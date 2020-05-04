import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { State } from '../../../../../app/state/app.state';
import { initialState } from '../../../state/crud.reducers';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<State>) { }
  profileForm;

  ngOnInit() {
    this.store.pipe(select('employee')).subscribe((employee) => {
      if (employee) {
        this.createForm(employee.employeeDetails);
      } else {
        this.createForm(initialState);
      }


  });
  }

  createForm(employee) {
    this.profileForm = this.formBuilder.group({
      name: [employee.name, Validators.required],
      salary: [employee.salary, Validators.required ],
      age: [employee.age, Validators.required]
    });
  }

  submitForm() {
    console.log(this.profileForm);
    const adddetailsdata = {
      name: this.profileForm.get('name').value,
      salary: this.profileForm.get('salary').value,
      age: this.profileForm.get('age').value,

    };
    this.store.dispatch({
      type: 'UPDATE DETAILS',
      payload: adddetailsdata
    });

    this.store.dispatch({
      type: 'UPDATE PAGE',
      payload: 'MOREDETAILS'
    });
  }

}
