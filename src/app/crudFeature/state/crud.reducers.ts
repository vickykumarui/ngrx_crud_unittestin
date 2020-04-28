export function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE DETAILS':
        return {
            ...state,
            updateDetails: action.payload
        };
        break;
    }
}
