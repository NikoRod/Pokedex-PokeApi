import React from 'react';

// STYLES
import "../styles/Buscador.scss";

// COMPONENTS
import { Buscar } from "./Icons";

export default function Buscador({ busqueda, setBusqueda, buscarPokemon }) {

  return (

    <>
    
      <h1 className='titulo'>Buscá el pokemon por su nombre o su nro. de pokédex</h1>

      <form className='container-buscador' onSubmit={buscarPokemon}>

        <input 
          type="text" 
          placeholder='Ingresa el nombre o nro. del pokemon'
          className='input-buscar' 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
        />
        <button className='btn-buscar' type='submit'>
          <Buscar />
          Buscar
        </button>

      </form>

    </>

  );
}
