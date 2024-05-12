import { Route, Routes } from "react-router-dom"
import { arrayPersonajes } from "./bd"
import { GlobalContextProvider } from "./componentes/GlobalContext"
import { GrupoTarjetas } from "./componentes/GrupoTarjeta"
import { Header } from "./componentes/Header"
import { Juego } from "./vistas/Juego"
import { Home } from "./vistas/Home"
import { About } from "./vistas/About"
import { Login } from "./vistas/Login"
import { Registro } from "./vistas/Registro"
import { Marvel } from "./vistas/Marvel"


export default function App() {
  return (
    <GlobalContextProvider>
      <h1 className="bg-gray-700 h-svh w-svw">
        <Header />
        <Routes>
          <Route path="/home" element={<Home/>}> </Route>
          <Route path="/juego" element={<Juego/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/marvel" element={<Marvel/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registro" element={<Registro/>}></Route>
        </Routes>
      </h1>
    </GlobalContextProvider>
  );
}
