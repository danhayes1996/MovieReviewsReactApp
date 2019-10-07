import React from 'react';
import './App.css';

import HomeComponent from './Components/Home/Home';
import NavBarComponent from './Components/Home/NavBar';

function App() {

  return (
    <div>
      <NavBarComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
