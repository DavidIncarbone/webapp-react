// Creazione della GlobalContext che conterrà tutte le chiamate API al server
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

//Api url e endpoint per axios
const apiUrl = import.meta.env.VITE_APIURL;

const GlobalContext = createContext();  //crea il Context e gli do il nome GlobalContext

// Creo il provider customizzato:
const GlobalProvider = ({ children }) => {
    // useState dei movie:
    const [movies, setmovies] = useState([]);
    // useState del singolo movie:
    const [singlemovie, setSinglemovie] = useState();

    /* Configuro lo useEffect per chiamare l'API per i film popolari solo al caricamento della pagina: */
    useEffect(() => {
        getmovies();
    }, []);

    function getmovies() {
        axios.get(apiUrl + "/movies")
            .then((res) => {
                console.log(res.data.items);
                setmovies(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finito: ", movies);
            });
    }

    function getSinglemovie(id) {
        axios.get(apiUrl + "/movies/" + id)
            .then((res) => {
                console.log("Scheda libro intero: ", res.data);
                setSinglemovie(res.data.item);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finito libri");
                console.log("singleMovie: ", singlemovie);

            });
    }

    // Oggetto contenente i dati da passare al value per offrirli ai Consumer (i componenti racchiusi nel Provider di GLobalContext):
    const collectionData = {
        movies,
        setmovies,
        singlemovie,
        getSinglemovie,
    }

    return (
        <GlobalContext.Provider value={collectionData}>
            {children}
        </GlobalContext.Provider>
    );
}
// Creo una hook personalizzata per accedere al Context:
function useGlobalContext() {
    const context = useContext(GlobalContext);

    // Se per sbaglio non dovessi inserire correttamente il Provider nel file App.jsx, allora genero un errore per facilitare il debug:
    if (!context) {
        throw new Error("useGlobalContext is not inside the context provider GlobalProvider");
    }
    return context;
}

export { GlobalProvider, useGlobalContext };