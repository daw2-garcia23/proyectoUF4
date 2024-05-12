import { useState } from "react"
import { supabase } from "../componentes/Supabase"
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(''); // Cambio aquí
  const [password, setPassword] = useState(''); // Cambio aquí

  const controladorSubmit = async (event) => {
    try {
        event.preventDefault();
        console.log('Correo:', email);
        console.log('Contraseña:', password);

        let { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
        });
          
        if (error) {
            console.error('Error al loguear el usuario:', error.message);
            return;
        }
                    
        navigate('/juego');
    } catch (error) {
        console.error('Error general:', error.message);
    }
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-700">
      <div className="bg-gray-300 p-8 rounded-lg shadow-md mt-32 w-96">
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold mb-4">Inicio de sesión</h2>
        </div>
        <form onSubmit={controladorSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              id="emailLogin" 
              name="email" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" 
              placeholder="Correo Electrónico" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña</label>
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password" 
              id="passwordLogin" 
              name="password" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" 
              placeholder="Contraseña" 
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="loguearse">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}
