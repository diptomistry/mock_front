//import logo from './logo.svg';
//import './App.css';
//import React from 'react';
/*
class App extends React.Component {
  constructor(props) {//initializing the component's state.
    super(props);//super() is used to call the constructor of the parent class.
    this.state = {
      apiResponse: '',//apiResponse is the state variable that will store the response from the server.initially, it is set to an empty string.
    };
  }

  callApi() {
    fetch('http://localhost:9000/api/users/check')
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {//to fetch data before the component is rendered.
    this.callApi();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.apiResponse}</p>
        </header>
      </div>
    );
  }
}

export default App;
*/
import React from 'react'
import Login from './login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App