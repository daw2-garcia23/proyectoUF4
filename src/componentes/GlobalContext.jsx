import { createContext, useState } from "react";

export const GlobalContext = createContext()



export function GlobalContextProvider({ children }) {

const [contadorClicks, setContadorClicks] = useState(0);

function clicks() {
    setContadorClicks(contadorClicks+1)
    console.log(contadorClicks)
}

return (
    <GlobalContext.Provider value={{
        contadorClicks, setContadorClicks,clicks
}}>
      {children}
    </GlobalContext.Provider>
  )
}
