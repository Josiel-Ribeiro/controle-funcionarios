import { useState } from "react"
import { Funcionarios } from "../types/Funcionarios"

type Props = {
    lista:Funcionarios[]
}

export const Components = {
Header: ()=>{

    const [menu,setMenu] = useState(false)

    const exibirMenu = () =>{

        setMenu(!menu)
    }
    return (
        <header className=" flex w-11/12 mx-auto  bg-gray-800 rounded-md ">
        <div className="w-24 h-24 p-12 ml-5 bg-gray-400 rounded-full text-center"></div>
        <div className="w-full h-24 flex justify-end">
            
            <div className="mr-5 sm:hidden">
                <h1 onClick={exibirMenu} className="cursor-pointer mt-5 text-white">Menu</h1>
                <div className={`${!menu &&  " bg-blue-100 overflow-hidden h-0"}`}>
                    <p className="hover:text-blue-500 cursor-pointer text-gray-400">All</p>
                    <p className="hover:text-blue-500 cursor-pointer text-white">New</p>
                    <p className="hover:text-blue-500 cursor-pointer text-white">Ative</p>
                    <p className="hover:text-blue-500 cursor-pointer text-white">Inactive</p>
                </div>
            </div>
           <div className="w-full hidden sm:block">
           <ul className="w-full h-full flex justify-around items-center text-white" >
            <li>All</li>
            <li>New</li>
            <li>Active</li>
            <li>Inactive</li>
        </ul>
           </div>
        </div>
        
    </header>
    )
},

Section: ({lista}:Props)=>{

    return(
        <section className="w-11/12 mx-auto ">
        
        <table  className="w-full">
            <thead className="bg-red-500 h-12 rounded-md hidden sm:flex sm:justify-around ">
                <th>Nome</th>
                <th>Email</th>
                <th>Função</th>
                <th>Status</th>
            </thead>
        </table>
            {
                lista.map(item =>
                    <tr key={item.id} className="flex justify-around border-b border">
                     <td>
                        {item.nome}
                        <p className="font-semibold text-gray-400">{item.email}</p>
                        </td>
                     
                     <td className="font-bold">{item.funcao}</td>
                     <td className={`${item.status && "text-green-400 cursor-pointer"} ${!item.status && "text-red-500 cursor-pointer"}`}>
                        {item.status && "Active" }
                        {!item.status && "Inactive" }
                     </td>
                    </tr>
                    
                    )
            }
                
        </section>
    )
}
    
}

export default Components