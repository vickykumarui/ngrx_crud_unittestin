import { EmployeeState, initialState } from './crud.selector';


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
