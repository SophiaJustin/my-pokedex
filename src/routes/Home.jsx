import { useState, useEffect } from "react"
import PokeCard from '../components/PokeCard.jsx'
import PokeView from '../components/PokeView.jsx'
import "../index.css"
import { useOutletContext } from "react-router-dom";

export default function Home() {
    const [pokemon, setPokemon] = useState(null);

    const { page, selectedPkmn, setSelectedPkmn } = useOutletContext().outletContext;

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=' + (20 * page) + '&limit=20')
            .then(response => response.json())
            .then(data => data.results.map(elem => elem.url.slice(34, -1)))
            .then(setPokemon);
    }, [page]);

    if (!pokemon) return <p>Loading...</p>;

    return (
        <>
            <div class="pokemon-container">
                {selectedPkmn && <PokeView id={selectedPkmn}/>}
            </div>
            <div key="list" class="pokecard-container">
                {pokemon.map(elem => <PokeCard key={elem} id={elem} selected={elem === selectedPkmn} clickPokemon={() => setSelectedPkmn(elem)} />)}
            </div>
        </>
    )
}