import { Reducer } from 'redux';
import { markCompleteAction, markInCompleteAction, deleteJobAction } from '../../types/actionType'
import { complete, incomplete } from '../../types/storeType';
import storetype from '../../types/storeType';

const initialState: complete = [];

const completeReducer: Reducer<complete, deleteJobAction | markCompleteAction | markInCompleteAction> = (state = initialState, action) => {
    switch (action.type) {
        case "MARK_COMPLETE":
            return [...state, action.jobName]
        case "MARK_INCOMPLETE":
            return [...state, action.jobName]
        case "DELETE_JOB":
            return [...state.filter((jobName) => { jobName !== action.jobName })]
        default:
            return [...state];
    }
}
export default completeReducer