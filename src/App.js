import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';
import HomeComponent from './Components/Home/Home';
import MovieComponent from './Components/Movie/Movie';

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/home" component={HomeComponent} />
      <Route exact path="/movie/:id" component={MovieComponent} />
    </BrowserRouter>
  );
}

export default App;
