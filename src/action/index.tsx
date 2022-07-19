import { deleteJobActionCreator, markCompleteActionCreator, markInCompleteActionCreator } from '../types/actionCreatorType'



const markComplete: markCompleteActionCreator = (jobName) => {
    return {
        type: "MARK_COMPLETE",
        jobName: jobName,
    }
}

const markInComplete: markInCompleteActionCreator = (jobName) => {
    return {
        type: "MARK_INCOMPLETE",
        jobName: jobName,
    }
}

const deleteJob: deleteJobActionCreator = (jobName) => {
    return {
        type: "DELETE_JOB",
        jobName: jobName,
    }
}
export { markComplete, markInComplete, deleteJob }
export default {}
