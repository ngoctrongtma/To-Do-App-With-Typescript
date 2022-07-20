import React, { useRef, useState } from 'react'
import './App.scss'
import Container from 'react-bootstrap/esm/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import {
    deleteComplete,
    deleteInComplete,
    markComplete,
    markInComplete,
} from './action/index'
import storeType from './types/storeType'
import appPropType from './types/appPropType'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import {
    CheckmarkOutline,
    EllipsisHorizontalOutline,
    ListOutline,
    TrashOutline,
} from 'react-ionicons'

const App: React.FC<appPropType> = ({
    complete,
    incomplete,
    deleteComplete,
    deleteInComplete,
    markInComplete,
    markComplete,
}) => {
    const ALL = 'ALL'
    const COMPLETE = 'COMPLETE'
    const INCOMPLETE = 'INCOMPLETE'
    const [show, setShow] = useState(ALL)
    const [jobName, setJobName] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    function handleAddJob() {
        if (jobName !== '') {
            markInComplete(jobName)
            setJobName('')
            inputRef.current?.focus()
        }
    }
    function handleChangeComplete(jobName: String) {
        markComplete(jobName)
        deleteInComplete(jobName)
    }
    function handleChangeInComplete(jobName: String) {
        markInComplete(jobName)
        deleteComplete(jobName)
    }
    function handleDeleteJob(
        listName: 'complete' | 'incomplete',
        jobName: String
    ) {
        if (listName === 'complete') {
            deleteComplete(jobName)
        } else if (listName === 'incomplete') {
            deleteInComplete(jobName)
        }
    }
    return (
        <div className="App">
            <Container className="to-do-app-container">
                <div className="to-do-app-wrap">
                    <div className="to-do-app__header">
                        <h2>Todo App Typescript</h2>
                    </div>
                    <div className="to-do-app__content">
                        {show === ALL ? (
                            <ul>
                                {complete.map((job, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="job-is-done">
                                                {' '}
                                                {job}{' '}
                                            </div>
                                            <div>
                                                <Button
                                                    variant="success"
                                                    onClick={() => {
                                                        handleChangeInComplete(
                                                            job
                                                        )
                                                    }}
                                                >
                                                    <CheckmarkOutline
                                                        color={'#00000'}
                                                        title={'Complete'}
                                                        height="20px"
                                                        width="20px"
                                                    />
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => {
                                                        handleDeleteJob(
                                                            'complete',
                                                            job
                                                        )
                                                    }}
                                                >
                                                    <TrashOutline
                                                        color={'#00000'}
                                                        title={'Delete'}
                                                        height="20px"
                                                        width="20px"
                                                    />
                                                </Button>
                                            </div>
                                        </li>
                                    )
                                })}
                                {incomplete.map((job, index) => {
                                    return (
                                        <li key={index}>
                                            <div>{job} </div>
                                            <div>
                                                <Button
                                                    variant="warning"
                                                    onClick={() => {
                                                        handleChangeComplete(
                                                            job
                                                        )
                                                    }}
                                                >
                                                    <EllipsisHorizontalOutline
                                                        color={'#fff'}
                                                        title={'Is Doing'}
                                                        height="20px"
                                                        width="20px"
                                                    />
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => {
                                                        handleDeleteJob(
                                                            'incomplete',
                                                            job
                                                        )
                                                    }}
                                                >
                                                    <TrashOutline
                                                        color={'#00000'}
                                                        title={'Delete'}
                                                        height="20px"
                                                        width="20px"
                                                    />
                                                </Button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        ) : null}
                        {show === COMPLETE ? (
                            <ul>
                                {complete.map((job, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="job-is-done">
                                                {' '}
                                                {job}{' '}
                                            </div>
                                            <div>
                                                <Button
                                                    variant="success"
                                                    onClick={() => {
                                                        handleChangeInComplete(
                                                            job
                                                        )
                                                    }}
                                                >
                                                    <CheckmarkOutline
                                                        color={'#00000'}
                                                        title={'Complete'}
                                                        height="20px"
                                                        width="20px"
                                                    />
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => {
                                                        handleDeleteJob(
                                                            'complete',
                                                            job
                                                        )
                                                    }}
                                                >
                                                    <TrashOutline
                                                        color={'#00000'}
                                                        title={'Delete'}
                                                        height="20px"
                                                        width="20px"
                                                    />
                                                </Button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        ) : null}
                        {show === INCOMPLETE ? (
                            <ul>
                                {incomplete.map((job, index) => {
                                    return (
                                        <li key={index}>
                                            <div>{job} </div>
                                            <div>
                                                <Button
                                                    variant="warning"
                                                    onClick={() => {
                                                        handleChangeComplete(
                                                            job
                                                        )
                                                    }}
                                                >
                                                    <EllipsisHorizontalOutline
                                                        color={'#fff'}
                                                        title={'Is Doing'}
                                                        height="20px"
                                                        width="20px"
                                                    />
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => {
                                                        handleDeleteJob(
                                                            'incomplete',
                                                            job
                                                        )
                                                    }}
                                                >
                                                    <TrashOutline
                                                        color={'#00000'}
                                                        title={'Delete'}
                                                        height="20px"
                                                        width="20px"
                                                    />
                                                </Button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        ) : null}
                    </div>
                    <div className="to-do-app__footer">
                        {' '}
                        <InputGroup>
                            <FormControl
                                ref={inputRef}
                                value={jobName}
                                placeholder={'Add work in here'}
                                onChange={(e) => {
                                    setJobName(e.target.value)
                                }}
                            ></FormControl>
                            <Button variant="success" onClick={handleAddJob}>
                                <span>+</span>
                            </Button>
                        </InputGroup>
                        <div className="btn-show-list">
                            <Button
                                onClick={() => {
                                    setShow(ALL)
                                }}
                            >
                                <ListOutline
                                    color={'#ffffff'}
                                    title={'Show all job'}
                                    height="20px"
                                    width="20px"
                                />
                            </Button>
                            <Button
                                variant="warning"
                                onClick={() => {
                                    setShow(INCOMPLETE)
                                }}
                            >
                                <EllipsisHorizontalOutline
                                    color={'#ffffff'}
                                    title={'Show incomplete'}
                                    height="20px"
                                    width="20px"
                                />
                            </Button>
                            <Button
                                variant="success"
                                onClick={() => {
                                    setShow(COMPLETE)
                                }}
                            >
                                {' '}
                                <CheckmarkOutline
                                    color={'#00000'}
                                    title={'Show complete'}
                                    height="20px"
                                    width="20px"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
const mapStateToProps = (state: storeType) => {
    return {
        complete: state.complete,
        incomplete: state.incomplete,
    }
}

export default connect(mapStateToProps, {
    deleteComplete,
    deleteInComplete,
    markComplete,
    markInComplete,
})(App) // note: why mapDispatchToProps active ???
