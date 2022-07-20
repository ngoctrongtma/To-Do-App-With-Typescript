import {
    deleteCompleteActionCreator,
    deleteInCompleteActionCreator,
    markCompleteActionCreator,
    markInCompleteActionCreator,
} from '../types/actionCreatorType'

const markComplete: markCompleteActionCreator = (jobName) => {
    return {
        type: 'MARK_COMPLETE',
        jobName: jobName,
    }
}

const markInComplete: markInCompleteActionCreator = (jobName) => {
    return {
        type: 'MARK_INCOMPLETE',
        jobName: jobName,
    }
}

const deleteComplete: deleteCompleteActionCreator = (jobName) => {
    return {
        type: 'DELETE_COMPLETE',
        jobName: jobName,
    }
}

const deleteInComplete: deleteInCompleteActionCreator = (jobName) => {
    return {
        type: 'DELETE_INCOMPLETE',
        jobName: jobName,
    }
}

export { markComplete, markInComplete, deleteComplete, deleteInComplete }
