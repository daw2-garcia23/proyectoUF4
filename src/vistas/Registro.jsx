import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../componentes/GlobalContext";
import { supabase } from "../componentes/Supabase";



export function Registro() {
  const navigate = useNavigate();
    
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = async (event) => {
      try {
          event.preventDefault();
          // Aquí puedes manejar la lógica para enviar los datos del formulario
          console.log('Nombre:', nombre);
          console.log('Correo:', correo);
          console.log('Contraseña:', contraseña);

          let { data, error } = await supabase.auth.signUp({
            email: correo,
            password: contraseña
          })
          
          if (error) {
              console.error('Error al registrar usuario:', error.message);
              return;
          }

          console.log('data',data)
          console.log('data2',data.user.id)
          const { data: users, error: errorBD } = await supabase
          .from('usuarios')
          .insert([
              {
                  nombre: nombre, 
                  mail: correo, 
                  users_id: data.user.id
              },
          ]);
      
          if (errorBD) {
              console.error('Error al insertar usuario en la base de datos:', errorBD.message);
              return;
          }
          console.log('hola desde antes de navegar')
                      
          navigate('/login')
      } catch (error) {
          console.error('Error general:', error.message);
      }
  };

        return (
          <div className="flex justify-center items-start h-screen bg-gray-700">
            <div className="bg-gray-300 p-8 rounded-lg shadow-md mt-32 w-96">
                <div className="flex justify-center">
                    <h2 className="text-2xl font-bold mb-4">Registro</h2>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Nombre</label>
                    <input
                    value={nombre} 
                    onChange={(e)=>setNombre(e.target.value)}
                    type="text" 
                    id="nombreRegistro" 
                    name="nombre" 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" 
                    placeholder="José García" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
                    <input 
                      value={correo}
                      onChange={(e)=>setCorreo(e.target.value)}
                      type="email" 
                      id="emailRegistro" 
                      name="email" 
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" 
                      placeholder="Correo Electrónico" />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña</label>
                    <input 
                    value={contraseña}
                    onChange={(e)=>setContraseña(e.target.value)}
                    type="password" 
                    id="passwordRegistro" 
                    name="password" 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" 
                    placeholder="Contraseña" />
                    </div>
                    <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="registrarse">Registrarse</button>
                    </div>
                </form>
            </div>
          </div>
        );
}
      