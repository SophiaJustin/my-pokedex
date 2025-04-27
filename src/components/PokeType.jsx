import { useType } from "../hooks/useType.jsx"
import "../index.css"

export default function PokeType({ type_id }){

    const typeColors = {
        1: "#919aa2",  2: "#ce416b",  3: "#8fa9de",  4: "#aa6bc8",
        5: "#d97845",  6: "#c5b78c",  7: "#91c12f",  8: "#5269ad",
        9: "#5a8ea2",  10: "#ff9d55", 11: "#5090d6", 12: "#63bc5a",
        13: "#f5d23b", 14: "#fa7179", 15: "#73cec0", 16: "#0b6dc3",
        17: "#5a5465", 18: "#ec8fe6"
    };
    
    const color = typeColors[type_id] || "#000000";

    const myStyle = {
        filter: `drop-shadow(0 0 0.75rem ${color})`,
      };

    return (
        <>
            <img 
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/" + type_id + ".png"}
                style={myStyle}
            />
        </>
    )
}