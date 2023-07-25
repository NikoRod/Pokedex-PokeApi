import React, { useState, useEffect } from 'react';

// STYLES
import "../styles/Navbar.scss"

// COMPONENTS
import { Logo, Sol, Luna } from "./Icons";

export default function Navbar() {

  const [tema, setTema] = useState("claro");

  const handleChange = (e) => setTema(e.target.checked ? 'oscuro' : 'claro');

  useEffect(() => {
    document.body.setAttribute('data-tema', tema)
  }, [tema])
  

  return (

    <nav>

      <Logo />

      <div className='switch'>

        <Sol />
        <label>
          <input type="checkbox" hidden onChange={handleChange} />
          <span></span>
        </label>
        <Luna />

      </div>

    </nav>

  );
}
