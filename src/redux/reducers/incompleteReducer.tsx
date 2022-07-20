import { Reducer } from 'redux'
import {
    markInCompleteAction,
    deleteInCompleteAction,
} from '../../types/actionType'
import { incomplete } from '../../types/storeType'

const initialState: incomplete = []

const incompleteReducer: Reducer<
    incomplete,
    deleteInCompleteAction | markInCompleteAction
> = (state = initialState, action) => {
    switch (action.type) {
        case 'MARK_INCOMPLETE':
            return [...state, action.jobName]
        case 'DELETE_INCOMPLETE':
            return [
                ...state.filter((jobName) => {
                    return jobName !== action.jobName
                }),
            ]
        default:
            return [...state]
    }
}

export default incompleteReducer
