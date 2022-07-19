export interface markCompleteAction {
    type: "MARK_COMPLETE",
    jobName: String,
}

export interface markInCompleteAction {
    type: "MARK_INCOMPLETE",
    jobName: String,
}

export interface deleteJobAction {
    type: "DELETE_JOB",
    jobName: String,
}