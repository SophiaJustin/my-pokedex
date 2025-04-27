import { usePokemon } from "../hooks/UsePokemon.jsx"
import "../index.css"

export default function PokeCard( { id, clickPokemon, selected } ) {
    const getPokemon = usePokemon();

    const pokemon = getPokemon(id);
    
    if (!pokemon) return <p>Loading...</p>;

    return (
        <>
            <div key={pokemon.id} className={"pokecard " + (selected ? 'pokecard-selected' : '')} onClick={clickPokemon}>
                <div>
                    {/* <img src={pokemon?.sprites.versions["generation-v"]["black-white"].animated.front_default}></img> */}
                    <img src={pokemon?.sprites.front_default}></img>
                </div>
                <div>
                    <p>No. {pokemon.id.toString().padStart(3, "0")}</p>
                </div>
                <div>
                    <h2>{pokemon.name}</h2>
                </div>
            </div>
        </>
    );

}