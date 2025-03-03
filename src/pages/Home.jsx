import Cards from "../components/Cards";

import { useState, useEffect } from "react";

// Importo axios
import axios from "axios"

const Home = () => {

    const API_KEY = "4736b325f1f7b8af69ed3010eed17565"
    const URL = "https://api.themoviedb.org/3"

    // GESTIONE STATO DELL'OGGETTO FORNITO DALL'API
    // Stato dei film
    const [films, setFilms] = useState([]);

    // Stato di ricerca film
    const [searchQuery, setSearchQuery] = useState("");

    // CHIAMATA API
    function fetchFilms() {
        axios.get(`${URL}/movie/popular?api_key=${API_KEY}`)
            .then((res) =>
                // DATI DELL'API
                setFilms(res.data.results))
    }
    // RECUPERO I DATI 
    useEffect(fetchFilms, []);


    // Funzione di ricerca film
    function handleSearch(e) {
        // Prevengo il caricamento della pagina
        e.preventDefault();
        // Settiamo in nuovo valore
        searchQuery("");
    }

    return (
        <>
            {/* Form */}
            <div className="form-nav">
                <form action="#" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Cerca il film..."
                        // Imposto il valore inserito dall'utente
                        value={searchQuery}
                        // Aggiorno lo stato in base al valore
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    {/* Button */}
                    <button type="submit">Cerca</button>
                </form>
            </div>

            {/* Cards */}
            <div className="films-card">
                {/* Ciclo i dati in cards */}
                {films.map(
                    (film) => (
                        // Imposto i valori di ricerca con una condizione
                        // film.title.toLowerCase().startsWith(searchQuery) && 
                        // Definisco i valori 
                        <Cards film={film} key={film.id} />
                    ))};

            </div></>
    )
}

export default Home