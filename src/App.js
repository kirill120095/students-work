
import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Navigator from './components/Navigator';



class App extends React.Component {

  state = {
    id: 0,
    isLoggedIn: false,
  };
s
  updateData = (value) => {
    this.setState({ id: value })
  }


  handleLoginClick = (param) => {
    this.setState({ isLoggedIn: param });
  }

  render() {
    return <div className="App">
      {this.state.isLoggedIn ?
        <div className="MainScreen">
          <Navigator updateData={this.updateData} />
          <Dashboard handleLoginClick={this.handleLoginClick}
            id={this.state.id} />
            
        </div> : <LoginForm handleLoginClick={this.handleLoginClick} />}
    </div>;
  }
}

export default App;
