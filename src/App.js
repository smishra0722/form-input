import React from 'react';
import './App.css';


import InputForm from './components/input-form/input-form.component';
import DisplayInputs from './components/display-inputs/display-inputs.component';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="form-app">
        <InputForm />
        <DisplayInputs />
      </div>
    )
  }
}

export default App;
