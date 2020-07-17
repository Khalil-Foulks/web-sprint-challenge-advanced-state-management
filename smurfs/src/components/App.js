import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList'

import { connect } from 'react-redux'
import { fetchSmurfs } from '../components/store/actions/actions'

const App = props => {
  return (
    <div className="App">
      <h1>SMURFS! APP</h1>
      <SmurfList fetchSmurfs={props.fetchSmurfs} smurfs={props.smurfs} isLoading={props.isLoading} error={props.error}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

const mapDispatchToProps = { fetchSmurfs } 

export default connect(mapStateToProps, mapDispatchToProps)(App)