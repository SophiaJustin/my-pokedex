import { useNavigate } from "react-router-dom";

export default function Footer( { page, onClick_next, onClick_back, selectedPokemon, isHome } ){
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/")
    };

    if(!isHome){
        return <button onClick={goBack}>BACK</button>
    }

    const viewPokemon = () => {
      navigate("/pokemon/" + selectedPokemon)
    };

    return (
        <>
            <button disabled={page === 0} onClick={onClick_back}>PREVIOUS</button>
            <button disabled={!selectedPokemon} onClick={viewPokemon}>VIEW</button>
            <button disabled={page === 65} onClick={onClick_next}>NEXT</button>
        </>
    )
}