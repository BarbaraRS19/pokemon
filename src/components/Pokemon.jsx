import { useState, useEffect } from "react"
import './pokemon.css'

export default function Pokemon(){

const [id, setId] = useState(1);
const [pokemon, setPokemon] = useState(null);
const fetchData = async () => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
    }catch(error){
        console.error('Erro: ', error);
    }
}
    useEffect(() =>{
fetchData()
    }, [id,])

    const nextPokemon = () => {
        setId(id + 1)
    }
    const previousPokemon = () => {
        setId(id - 1)
    }
    return(
        <div className="pokebola">

            {pokemon && (
                    <div className="pokemon">
                         <h1 class="gradient">Pokémon</h1>
                         <div className="poke">
                        <p>#{pokemon.id}</p>
                        <p>{pokemon.weight}g</p>
                        <div className="tipo">
                        {pokemon.types.map((type, index) => (
                        <p key={index}>{type.type.name}</p>
                        ))}
                        </div>
                        </div>
                        <p class="gradiente">{pokemon.name}</p>
                        <div className="image">
                        <img src={pokemon.sprites.front_default} alt="Pokemon" />
                        </div>
                    </div>
                    
                )}
                <div  className="botao">
                <button onClick={previousPokemon}>Anterior</button>
                <button onClick={nextPokemon}>Próximo</button>
                </div>
        </div>
    )
}
