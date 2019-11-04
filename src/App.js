import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import HomeComponent from './Components/Home/Home';
import MovieComponent from './Components/Movie/Movie';
import SignInComponent from './Components/SignIn/SignIn';
import SignUpComponent from './Components/SignUp/SignUp';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/home" component={HomeComponent} />
      <Route exact path="/movie/:id" component={MovieComponent} />
      <Route exact path="/signin" component={SignInComponent} />
      <Route exact path="/signup" component={SignUpComponent} />
    </BrowserRouter>
  );
}

export default App;
