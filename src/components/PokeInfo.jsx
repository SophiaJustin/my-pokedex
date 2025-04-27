import { usePokemon } from "../hooks/UsePokemon.jsx"
import PokeType from './PokeType.jsx'
import "../index.css"
import PokeStat from "./Stat.jsx";

export default function PokeInfo({ id, pokemon }){

    if(!pokemon){
        const getPokemon = usePokemon();
        pokemon = getPokemon(id);
    }
    
    if (!pokemon) return <p>Loading...</p>;

    return (
        <>
            <div class="pokeinfo">
                <h2><b>{pokemon.name}</b> ({pokemon.id})</h2>
                <hr/>
                {pokemon.stats.map(elem => <PokeStat key={elem.stat.name} stat={elem}/>)}
            </div>
        </>
    )

}