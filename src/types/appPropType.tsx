import { complete, incomplete } from './storeType'
import {
    deleteCompleteActionCreator,
    deleteInCompleteActionCreator,
    markCompleteActionCreator,
    markInCompleteActionCreator,
} from './actionCreatorType'

interface appPropType {
    complete: complete
    incomplete: incomplete
    deleteComplete: deleteCompleteActionCreator
    deleteInComplete: deleteInCompleteActionCreator
    markComplete: markCompleteActionCreator
    markInComplete: markInCompleteActionCreator
}

export default appPropType
