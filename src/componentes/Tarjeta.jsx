import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

export function Tarjeta({ imagen, nombre }) {
    const { clicks } = useContext(GlobalContext);

    const [contadorClicks, setContadorClicks] = useState(0);
    const [girada, setGirada] = useState(false); // Cambiado a false
  

    function clicksIndividual() {
        setContadorClicks(contadorClicks + 1);
        clicks();
    }

    function girarTarjeta() {
        clicksIndividual();
        if (!girada) { // Solo girar si la carta no está ya girada
            setGirada(true);
            setTimeout(() => {
                setGirada(false); // Girar la carta automáticamente después de 1 segundo
            }, 1000);
        }
    }

    return (
        <div className="w-1/6 p-1">
            <div onClick={girarTarjeta} className="w-44 mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="justify-center">
                    {girada ? (
                        <div>
                            <img className="w-full h-auto" src={imagen} alt="imagen" />
                            <div className="px-6 py-4 text-center">
                                <div className="font-bold text-xl mb-2">{nombre}</div>
                                <p>Clicks: {contadorClicks}</p>
                            </div>
                        </div>
                    ) : (
                        <img className="w-full h-auto" src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/94/latest/20230212115022/Parte_trasera_carta_de_Pok%C3%A9mon.png/180px-Parte_trasera_carta_de_Pok%C3%A9mon.png" alt="D'esquena" />
                    )}
                </div>
            </div>
        </div>
    );
}
