import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList'
import Form from './Form'

import { connect } from 'react-redux'
import { fetchSmurfs, addSmurfs } from '../components/store/actions/actions'

const App = props => {
  return (
    <div className="App">
      <h1>SMURFS! APP</h1>
      <Form addSmurfs={props.addSmurfs}/>
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

const mapDispatchToProps = { fetchSmurfs, addSmurfs } 

export default connect(mapStateToProps, mapDispatchToProps)(App)