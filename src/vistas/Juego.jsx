import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../componentes/GlobalContext"
import { GrupoTarjetas } from "../componentes/GrupoTarjeta"



export function Juego(){
    
    const {contadorClicks} = useContext(GlobalContext)
    const [pokemons, setPokemons] = useState([]);

  
    useEffect(() => {
        async function fetchData() {
            try {
                const promises = [];
                for (let i = 0; i < 9; i++) {
                    const randomId = Math.floor(Math.random() * 1000) + 1; 
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
                    const data = await response.json();
                    promises.push({
                        imagen: data.sprites.front_default,
                        nombre: data.name
                    });
                }
                const pokemonData = await Promise.all(promises);
                const duplicarPokemons = [...pokemonData, ...pokemonData] //duplicar arrays
                const pokemonsAleatorios = duplicarPokemons.sort(()=>Math.random() - 0.5 )
                setPokemons(pokemonsAleatorios);
            } catch (error) {
                console.error("Error al mostrar los pokemons", error);
            }
        }

        fetchData();
    }, []);
    return (
        <div>
            <div className="bg-blue-900 text-white p-2 text-center">
                Contador de clicks: {contadorClicks}
            </div>
            <GrupoTarjetas datos={pokemons} />
        </div>
    );
    
}