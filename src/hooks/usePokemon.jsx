import { useState, useEffect } from "react"

export function usePokemon(){
    const getPokemon = (name) => {
        const [pokemon, setPokemon] = useState(null);

        useEffect(() => {
            if(!name) return;
            
            fetch("https://pokeapi.co/api/v2/pokemon/" + name)
                .then(response => response.json())
                .then(setPokemon)
                .catch(console.log);
        }, [name])
    
        return pokemon;
    }
    // console.log("using hook for " + name);

    return  getPokemon ;
}