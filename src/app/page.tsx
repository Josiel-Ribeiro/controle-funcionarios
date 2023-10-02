"use client"

import { use, useState } from "react"


import { Lista } from "./components/lista"
import { Funcionarios } from "./types/Funcionarios"




export const Page = () =>{
  
 const [listaOriginal, SetListaOriginal] = useState<Funcionarios[]>([
  {  id:1,
    nome:"Josiel Lucas",
    email:"Josiallucas615@gmail.com",
    funcao:"TI",
    status:true
 },
 {  id:2,
     nome:"Josiel Lucas",
     email:"Josiallucas615@gmail.com",
     funcao:"TI",
     status:false
  }
  ,
 {  id:4,
     nome:"Josiel Lucas",
     email:"Josiallucas615@gmail.com",
     funcao:"TI",
     status:false
  }
  
  ,
 {  id:5,
     nome:"Josiel Lucas",
     email:"Josiallucas615@gmail.com",
     funcao:"TI",
     status:false
  },
  {  id:6,
    nome:"João",
    email:"João15@gmail.com",
    funcao:"TI",
    status:true
 }
  
 ])

 const [nome, setnome] = useState('João')

const [lista, setLista] = useState<Funcionarios[]>(listaOriginal)

const Alterarstatus = (id:number) =>{
  let newList:Funcionarios[]= lista.map((item)=>{
if(item.id === id){
  return {...item,status:!item.status}
}else{
  return item
}
  })

  setLista(newList)
}



const ListarAtivos = () =>{
  let newList:Funcionarios[] = listaOriginal.filter((item)=>item.status === true)
  
  setLista(newList)
  
 
}

const ListarInativos = () =>{
  let newList:Funcionarios[] = listaOriginal.filter((item)=>item.status ===false)
  
  setLista(newList)
 
}



  return(
    <div className="w-screen h-screen bg-black">
      <header className="w-full  bg-gray-800 flex justify-around rounded-md gap-4 text-blue-600 max-w-6xl lg:mx-auto">
       <div className="w-32 h-32 bg-gray-400 rounded-full lg:-ml-24 overflow-hidden "><img src="./ativo.jpg" alt=""  className="w-full h-full"/></div> <button>Adicionar</button> <button onClick={ListarAtivos}>Ativos</button> <button onClick={ListarInativos}>Inativos</button>
      </header>

    {
   <Lista list={lista} onclick={Alterarstatus}/>
    }

    

    </div>
  )
}


export default Page