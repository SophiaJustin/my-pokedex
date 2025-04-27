import { usePokemon } from "../hooks/UsePokemon.jsx"
import PokeType from './PokeType.jsx'
import "../index.css"

export default function PokeView({ id, pokemon }){

    if(!pokemon){
        const getPokemon = usePokemon();
        pokemon = getPokemon(id);
    }
    
    if (!pokemon) return <p>Loading...</p>;
    const types = pokemon.types.map(elem => elem.type.url.slice(31, -1))

    return (
        <>
            <div class="pokeview">
                {/* <img src={pokemon.sprites.other["official-artwork"].front_default}></img> */}
                <img src={pokemon.sprites.other["showdown"].front_default}></img>
                <div class="types">
                    {types.map(elem => <PokeType key={elem} type_id={elem}/>)}
                </div>
            </div>
        </>
    )

}