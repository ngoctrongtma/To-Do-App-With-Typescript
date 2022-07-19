import React from 'react';
import './App.scss';
import Container from 'react-bootstrap/esm/Container';
import { connect } from 'react-redux';
import { deleteJob, markComplete, markInComplete } from './action/index';
import storeType from './types/storeType';
import appPropType from './types/appPropType'

const App: React.FC<appPropType> = ({ complete, incomplete, deleteJob, markComplete, markIncomplete }) => {
  return (
    <div className="App">
      <Container className="to-do-app-container">
        <div className="to-do-app-wrap">
          <h1>Todo app</h1>
        </div>
      </Container>
    </div >
  );
}
const mapStateToProps = (state: storeType) => {
  return {
    complete: state.complete,
    incomplete: state.imcomplete,
  }
}

export default connect(mapStateToProps, { deleteJob, markComplete })(App);
