import React from 'react';
import Navbar from './components/layouts/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'
import NoticeDetail from './components/notices/NoticeDetail'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateNotice from './components/notices/CreateNotice'



import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/notice/:id' component={NoticeDetail} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateNotice} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
