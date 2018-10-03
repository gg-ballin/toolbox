import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import IOBoxes from '../components/IOBoxes/IOBoxes';
import Toolbox from './toolbox.jpg';
import { setInputField, requestInput } from '../redux/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <img style = {{paddingTop:'5px', width: '200px'}}src ={Toolbox} alt="logo"/>
          <IOBoxes />
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    inputState: state.updateIO.inputState,
    isPending:state.requestInput.isPending,
    error:state.requestInput.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch(setInputField(event.target.value)),
    onRequestInput: () => dispatch(requestInput())
  }
}


export default connect (mapDispatchToProps,mapStateToProps)(App);