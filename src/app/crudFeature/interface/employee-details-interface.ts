export interface EmployeeDetails {
    name: string | null;
    salary: string | null;
    age: string | null;
  }

export enum CurrenPage {
    DETAILSPAGE = 'DETAILS',
    MOREDETAILSPAGE = 'MOREDETAILS',
    REVIEWPAGE = 'REVIEW'
}

export interface MoreEmployeeDetails {
  previousCompane: string | null;
  expectedSalary: string | null;
}
