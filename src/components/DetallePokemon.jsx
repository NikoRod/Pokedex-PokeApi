import React from 'react';

// STYLES
import "../styles/Detalle.scss";

export default function DetallePokemon({ mostrar, pokemon, cerrar }) {

  return (

    <div className='modal-container' onClick={cerrar} style={{ display: mostrar ? 'grid' : 'none' }}>

      <section className='modal-body'>

        <div className="imagen-container">


          <img src={pokemon.img} alt={pokemon.name} className='imagen-detalle' />

          {/* <section>
            {pokemon.types?.map(type => <span className='tag'>{type}</span>)}
          </section> */}

          <div className='btn-deco1'></div>
          <div className='btn-deco2'></div>
          <div className='btn-deco3'></div>
          <div className='line-deco'></div>
          <div className='line-deco2'></div>
          <div className='line-deco3'></div>

        </div>

        <div className="data">

          <h2 className='titulo'>{pokemon.name} #{pokemon.id}</h2>

          <h3 className='titulo-seccion'>Habilidades</h3>
          <div className="abilities">
            {pokemon.abilities?.map(ability => 
              <span className='ability'>{ability}</span>
            )}
          </div>

          <h3 className='titulo-seccion'>Estadísitcas</h3>
          <div className="stats">
            {pokemon.stats?.map(stat => 
              <section>
                <span className='puntos'>{stat.base}</span>
                <span>{stat.name}</span>
              </section>  
            )}
          </div>

        </div>

      </section>

    </div>

  );
}
