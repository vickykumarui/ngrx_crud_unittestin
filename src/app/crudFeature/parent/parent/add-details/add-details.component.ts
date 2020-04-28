import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<any>) { }
  profileForm;
  employee;
  ngOnInit() {
    this.createForm();

    this.store.pipe(select('employee')).subscribe((employee) => {
      if (employee) {
        this.employee = employee.updateDetails;
      }
  });
  }

  createForm() {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required ],
      age: ['', Validators.required]
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
  }

}
