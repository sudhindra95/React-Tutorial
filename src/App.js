import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './Component/FormComponent';
import Welcome from './Component/Welcome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { UserProvider } from './UserContext';



function App() {
  
  // const [name, setMyname] = useState('');

  return (
    <div className="App">
      <Router>
        Welcome to React!!!
          <Switch>
          <UserProvider>
            <Route exact path="/" component={FormComponent} />
            <Route exact path="/welcome" component={Welcome} />
          </UserProvider>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
