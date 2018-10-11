import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import IOBoxes from '../components/IOBoxes/IOBoxes';
import Toolbox from './toolbox.jpg';
import { setInputField, requestInput } from '../redux/actions';

class App extends Component {
  state = { input: '' , ouput: ''}
  dispatch = this.props.dispatch;
  render() {
    const { inputState } = this.props;
    console.log(this.state.input);
    console.log(this.props.output);
    return (
      <div className="App">
        <header className="App-header">
          <img style = {{paddingTop:'5px', width: '200px'}} src={Toolbox} alt="logo"/>
          <IOBoxes 
          searchChange={(e) => this.setState({ input: e.target.value })} 
          onButtonSubmit={() => this.dispatch(requestInput(this.state.input))}
          output={(e) => this.setState({output: e.target.value})}
          />
        </header>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    inputState: state.updateIO.inputState,
    isPending:state.requestInput.isPending,
    output:state.requestInput.apiResponse,
    error:state.requestInput.error
  }
}

export default connect (mapStateToProps)(App);
