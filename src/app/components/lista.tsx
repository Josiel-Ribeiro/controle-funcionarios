
import { Funcionarios } from "../types/Funcionarios"


type Props = {
    list:Funcionarios[],
    onclick:(id:number)=>void
}


export const Lista = ({list,onclick}:Props) =>{




   
   

    

    return(
     <>
    


    <div className=" w-screen  bg-gray-800 max-w-6xl lg:mx-auto">
        
      
    
        <table className="mt-2 text-center mx-auto w-full  rounded-md">
          
          <thead className="border-b">
              <tr className="">
                  <th >Nome</th>
                  <th>email</th>
                  <th>Função</th>
                  <th>Status</th>
              </tr>
          </thead>
          <tbody>
             
             {list.map(item =>
             <tr key={item.id} className="border-b border-gray-50/80  ">
              <td>
                      <p>{item.nome}</p>
              </td>
              <td>
              <p>{item.email}</p>      
              </td>
  
              <td>
              <p>{item.funcao}</p>
              </td>
  
              <td>
              <p onClick={()=> onclick(item.id)} className={`${item.status && "w-28 m-auto border bg-green-500 rounded-md cursor-pointer"}
               ${!item.status && " w-28 m-auto border bg-red-500 rounded-md cursor-pointer"}`}>
                  {item.status && " Ativo"} {!item.status && " Inativo"}</p>
              </td>
                  
          </tr> 
                 
                  )}
            
          </tbody>
          
       </table>
        
          
        </div>
        </>
    )


}