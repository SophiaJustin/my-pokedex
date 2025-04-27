import "../index.css"
import { useState, useEffect, useMemo } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

import Footer from '../components/Footer.jsx'

export default function Root() {
    const [page, setPage] = useState(0)
    const [selectedPkmn, setSelectedPkmn] = useState(null);
    const [isHome, setIsHome] = useState(true);
    const location = useLocation();

    const outletContext = useMemo(() => ({
        page,
        selectedPkmn,
        setSelectedPkmn
    }), [page, selectedPkmn])

    console.log(outletContext)

    useEffect(() => {
        setIsHome(location.pathname == "/")
    }, [location])

    function next(){
        setPage(page + 1)
    }

    function back(){
        setPage(page - 1)
    }

    return (
        <>
            <div id="navbar">
                <img src="pokedex_logo.png" alt="A pokedex logo!"/>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
            <div id="outlet">
                <Outlet context={{outletContext}} />
            </div>
            <div id="footer">
                <Footer page={page} onClick_next={next} onClick_back={back} selectedPokemon={selectedPkmn} isHome={isHome}/>
            </div>
        </>
    )
}