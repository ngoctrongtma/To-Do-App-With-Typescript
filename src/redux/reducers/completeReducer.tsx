import { Reducer } from 'redux'
import {
    markCompleteAction,
    deleteCompleteAction,
} from '../../types/actionType'
import { complete } from '../../types/storeType'

const initialState: complete = []

const completeReducer: Reducer<
    complete,
    deleteCompleteAction | markCompleteAction
> = (state = initialState, action) => {
    switch (action.type) {
        case 'MARK_COMPLETE':
            return [...state, action.jobName]
        case 'DELETE_COMPLETE':
            return [
                ...state.filter((jobName) => {
                    return jobName !== action.jobName
                }),
            ]
        default:
            return [...state]
    }
}
export default completeReducer
