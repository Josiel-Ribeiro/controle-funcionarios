 
 "use client"

import { useState } from "react"
import Components from "./components/Componentes"
import { Colaboradores } from "./data/Colaboradores"

 
 export const Page = () =>{

  const [listaOriginal, setListaOriginal] = useState(Colaboradores)
  const[lista, setLista] = useState(Colaboradores)

    return(

        <div className="w-screen">
      
      <Components.Header/>
      <Components.Section lista={lista}/>
      
        </div>
    )

 }

 export default Page