import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from '../../../../../app/state/app.state';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  showdetails = 'DETAILS';
  constructor(private store: Store<State>) { }

  ngOnInit() {
    
    this.store.pipe(select('employee')).subscribe((showdetails) => {
      if (showdetails) {
        this.showdetails = showdetails.currentpage;
      }
  });
  }


}
