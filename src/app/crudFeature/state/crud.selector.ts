import { EmployeeDetails, CurrenPage } from '../interface/employee-details-interface';

export interface EmployeeState {
    employeeDetails: EmployeeDetails | undefined;
    currentpage: string | '';

  }

const initialEmployeeDetails: EmployeeDetails = {
    name: null,
    salary: null,
    age: null
  };
export const initialState: EmployeeState = {
      employeeDetails: initialEmployeeDetails,
      currentpage: CurrenPage.DETAILSPAGE
  };



