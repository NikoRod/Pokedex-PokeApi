import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// STYLES
import "../styles/Pokemones.scss";

// COMPONENTS
import Loader from './Loader';
import DetallePokemon from './DetallePokemon';
import Buscador from './Buscador';

// HOOKS
import usePokemones from '../hooks/usePokemones';

// FUNCTIONS
function Pokemon({ id, name, img, verPokemon }) {
  return (
    <div className='pokemon-card' onClick={verPokemon}>
      <img src={img} alt={name} className='pokemon-imagen' />
      <p className='pokemon-titulo'>
        <span>#{id}</span>
        <span>{name}</span>
      </p>
    </div>
  )
}

export default function Pokemones() {

  const { pokemones, masPokemones, verMas, searchPokemon } = usePokemones()
  const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })
  const [busqueda, setBusqueda] = useState('')

  const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })

  const noVerPokemon = () => {
    setMostrar({ mostrar: false, pokemon: {}})
    setBusqueda('')
  }

  const buscarPokemon = async (e) => {
    e.preventDefault()

    if (!busqueda) return

    const pokemon = await searchPokemon(busqueda)
    console.log(pokemon);
    setMostrar({ mostrar: true, pokemon })
  }
  
  return (

    <>

      <DetallePokemon {...mostrar} cerrar={noVerPokemon}/>

      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} buscarPokemon={buscarPokemon}/>

      <InfiniteScroll
        dataLength={pokemones.length}
        next={masPokemones}
        hasMore={verMas}
        loader={<Loader />}
        endMessage={
          <h3 className='titulo' style={{ gridColumn: '1/6' }}>Lo siento, no hay más pokemones por mostrar</h3>
        }
        className='pokemon-container'
      >
        { pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)}/> )}
      </InfiniteScroll>
    </>
  )
}