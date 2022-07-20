import {
    markCompleteAction,
    markInCompleteAction,
    deleteCompleteAction,
    deleteInCompleteAction,
} from './actionType'

type markCompleteActionCreator = (jobName: String) => markCompleteAction // this is a function type return interface markCompleteAction  { type: "MARK_COMPLETE",jobName: String, }
type markInCompleteActionCreator = (jobName: String) => markInCompleteAction // this is a function type return interface markIncompleteAction  { type: "MARK_INCOMPLETE",jobName: String, }
type deleteCompleteActionCreator = (jobName: String) => deleteCompleteAction // this is a function type return interface deleteCompleteAction  { type: "DELETE_JOB", jobName: String, }
type deleteInCompleteActionCreator = (jobName: String) => deleteInCompleteAction // this is a function type return interface deleteInCompleteAction  { type: "DELETE_JOB", jobName: String, }

export type {
    markCompleteActionCreator,
    markInCompleteActionCreator,
    deleteCompleteActionCreator,
    deleteInCompleteActionCreator,
}
