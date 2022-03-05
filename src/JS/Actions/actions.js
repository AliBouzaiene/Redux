import { ADD_TASK } from "../Constants/actions-types";

export const addTask = newPost => {
    return {
        type: ADD_TASK,
        payload: newPost
    }
}