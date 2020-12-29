import React from 'react';
import Login from './component/Login';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
      
    </div>
  );
}

export default App;
