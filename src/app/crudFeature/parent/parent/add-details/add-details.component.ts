import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  profileForm;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required ],
      age: ['', Validators.required]
    });
  }

}
