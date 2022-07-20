export interface markCompleteAction {
    type: 'MARK_COMPLETE'
    jobName: String
}

export interface markInCompleteAction {
    type: 'MARK_INCOMPLETE'
    jobName: String
}

export interface deleteCompleteAction {
    type: 'DELETE_COMPLETE'
    jobName: String
}
export interface deleteInCompleteAction {
    type: 'DELETE_INCOMPLETE'
    jobName: String
}
