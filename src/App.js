import React from 'react';
import './App.css';

import HomeComponent from './Components/Home/Home';
import NavBarComponent from './Components/NavBar/NavBar';

function App() {

  return (
    <div>
      <NavBarComponent showSearchBar/>
      <HomeComponent />
    </div>
  );
}

export default App;
