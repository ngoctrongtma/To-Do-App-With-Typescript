import { markCompleteAction, markInCompleteAction, deleteJobAction } from './actionType'


type markCompleteActionCreator = (jobName: String) => markCompleteAction;
type markInCompleteActionCreator = (jobName: String) => markInCompleteAction;
type deleteJobActionCreator = (jobName: String) => deleteJobAction;

export type { markCompleteActionCreator, markInCompleteActionCreator, deleteJobActionCreator }