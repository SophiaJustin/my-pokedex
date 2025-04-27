import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/UsePokemon.jsx"
import PokeView from '../components/PokeView.jsx'
import "../index.css"
import PokeInfo from "../components/PokeInfo.jsx";

export default function Pokemon() {
    const { id } = useParams();

    const getPokemon = usePokemon();
    const pokemon = getPokemon(id);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <>
            <div class="pokemon-container">
                {pokemon && <PokeView pokemon={pokemon}/>}
            </div>
            <div class="pokemon-description">
                {pokemon && <PokeInfo pokemon={pokemon}/>}
            </div>
        </>
    )
}