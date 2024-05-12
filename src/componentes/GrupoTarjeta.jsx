import React from 'react';
import { Tarjeta } from './Tarjeta';
import { Juego } from '../vistas/Juego';


export function GrupoTarjetas({ datos }) {
    return (
    <div className="bottom-0 left-0 w-full bg-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
        {datos.map((tarjeta, key) => (
            <Tarjeta
                key={key}
                imagen={tarjeta.imagen}
                nombre={tarjeta.nombre}
            />
        ))}
        </div>
    </div>
    );
}
