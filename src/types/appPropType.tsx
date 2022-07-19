import { complete, incomplete } from './storeType'
import { deleteJobActionCreator, markCompleteActionCreator, markInCompleteActionCreator } from './actionCreatorType'

interface appPropType {
    complete: complete,
    incomplete: incomplete,
    deleteJob: deleteJobActionCreator,
    markComplete: markCompleteActionCreator,
    markIncomplete: markInCompleteActionCreator,
}

export default appPropType;