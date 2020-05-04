import { EmployeeDetails, CurrenPage, MoreEmployeeDetails } from '../interface/employee-details-interface';

export interface EmployeeState {
    employeeDetails: EmployeeDetails | undefined;
    currentpage: string | '';
    moreEmployeeDetails: MoreEmployeeDetails | undefined;

  }

const initialEmployeeDetails: EmployeeDetails = {
    name: null,
    salary: null,
    age: null
  };

const initialMoreEmployeeDetails: MoreEmployeeDetails = {
  previousCompane: '',
  expectedSalary: ''
  };
export const initialState: EmployeeState = {
      employeeDetails: initialEmployeeDetails,
      currentpage: CurrenPage.DETAILSPAGE,
      moreEmployeeDetails: initialMoreEmployeeDetails
  };

export function reducer(state: EmployeeState = initialState, action) {
    switch (action.type) {
        case 'UPDATE DETAILS':
        return {
            ...state,
            employeeDetails: action.payload
        };
        case 'UPDATE PAGE':
            return {
                ...state,
                currentpage: action.payload
            };
    }
}
