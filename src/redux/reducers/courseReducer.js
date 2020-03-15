export default function courseReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_COURSE":
            //this mutate state
            //state.push(action.course)
            // so we need to return the copy of state
            return [...state, { ...action.course }]
        default:
            return state;
    }
}