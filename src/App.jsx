import React from 'react';

// COMPONENTS
import Navbar from './components/Navbar';
import Pokemones from './components/Pokemones';

export default function App() {

  console.log(window.innerWidth);
  console.log(window.innerHeight);

  return (

    <>
    
      <Navbar />

      <Pokemones />

    </>

  );
}
