import { useState, useEffect } from "react"

export function useType(){
    const getType = (type_id) => {
        const [type, setType] = useState(null);

        useEffect(() => {
            if(!type_id) return;
            
            fetch("https://pokeapi.co/api/v2/type/" + type_id)
                .then(response => response.json())
                .then(setType)
                .catch(console.log);
        }, [type_id])
    
        return type;
    }

    return  getType ;
}