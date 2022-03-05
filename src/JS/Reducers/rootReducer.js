import { ADD_TASK } from "../Constants/actions-types";

const initialState = {
    posts: [

    ]
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                posts: [...state.posts, action.payload]
            }
        default:
            return state
    }
}

export default rootReducer
