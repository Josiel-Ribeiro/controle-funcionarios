import {  useState } from "react";
import { Funcionarios } from "../types/Funcionarios";

type Props = {
  lista: Funcionarios[];
  onClick: (id: number) => void;
  alterarStatus: (id: number) => void;
  editar: (id:number)=>void
};

type PropsRemove = {
  onClick: () => void;
  noremove: () => void;
};

type PropsHeade = {
  filterAtivos: () => void;
  filterIntivos: () => void;
  all: () => void;
  newTela: () => void;
};

type PropsSearch = {
  set: (e: string) => void;
  buscar: () => void;
  value: string;
};

type PropsForm = {
  voltar:()=>void
  addNome: (nome: string) => void;
  addEmail: (email: string) => void;
  addFuncao: (funcao: string) => void;
  handleSubmit:(e:React.FormEvent)=>void
  
}

type PropsEdit = {
  onClick:(item:Funcionarios)=>void,
  close: ()=>void
  item:Funcionarios
}

export const Header = ({ filterAtivos, all, filterIntivos,newTela }: PropsHeade) => {
  const [menu, setMenu] = useState(true);

  const mostrar = () => {
    setMenu(!menu);
  };

  return (
    <header className=" flex h-32 w-full mx-auto justify-between bg-gray-700/60 ">
      <div className=" w-24 h-24 mt-4 ml-5 bg-gray-300 rounded-full text-center sm:ml-28">
        <p className="mt-8 font-bold ">Logo</p>
      </div>
      <div className="sm:hidden">
        <h1 onClick={mostrar} className="mr-16 mt-2 text-white cursor-pointer">
          Menu
        </h1>

        {!menu && (
          <ul className="fixed h-auto overflow-hidden">
            <li
              onClick={all}
              className="cursor-pointer text-white hover:text-red-600"
            >
              All
            </li>
            <li
              onClick={filterAtivos}
              className="cursor-pointer text-white hover:text-red-600"
            >
              Active
            </li>
            <li
              onClick={filterIntivos}
              className="cursor-pointer text-white hover:text-red-600"
            >
              Inactive
            </li>
            <li onClick={newTela} className="cursor-pointer text-white hover:text-red-600">
              New
            </li>
          </ul>
        )}
      </div>
      <div className="hidden sm:flex justify-around w-9/12  ">
        <button
          onClick={all}
          className="cursor-pointer text-white  hover:text-red-600"
        >
          All
        </button>
        <button
          onClick={filterAtivos}
          className="cursor-pointer text-white hover:text-red-600"
        >
          Active
        </button>
        <button
          onClick={filterIntivos}
          className="cursor-pointer  text-white hover:text-red-600"
        >
          Inactive
        </button>
        <button onClick={newTela} className="cursor-pointer text-white hover:text-red-600">
          New
        </button>
      </div>
    </header>
  );
};

export const Section = ({ lista, onClick, alterarStatus,editar }: Props) => {
  return (
    <div className=" fixed  overflow-hidden overflow-y-auto mt-12 w-full mb-5 sm:w-11/12 sm:ml-16 h-4/6 m-5 mx-auto">
      <table className="w-full mx-auto border-b border-red-600 ">
        <thead className=" bg-red-600 text-left w-full">
          <tr className="font-extrabold">
            <th className="text-white sm:hidden">Info</th>
            <th className="hidden text-white sm:table-cell ">Nome</th>
            <th className="hidden text-white sm:table-cell">Email</th>
            <th className="hidden text-white sm:table-cell">Função</th>
            <th className=" text-white">status</th>
          </tr>
        </thead>
        <tbody className="text-left border-b border-red-500">
          {lista.map((item) => (
            <tr key={item.id} className="border-b border">
              <td className="sm:hidden ">
                <p className="font-bold text-white">{item.nome}</p>
                <p className="text-white">{item.email}</p>
                <p className="text-white">{item.funcao}</p>
              </td>

              <td className="hidden text-white sm:table-cell sm:h-12">
                {item.nome}
              </td>
              <td className="hidden text-white sm:table-cell">{item.email}</td>
              <td className="hidden text-white sm:table-cell">{item.funcao}</td>

              <td>
                {item.status && (
                  <div className="flex">
                    <button
                      onClick={() => alterarStatus(item.id)}
                      className="w-14 bg-green-500 rounded-md"
                    >
                      Ativo
                    </button>
                    <button
                      onClick={() => onClick(item.id)}
                      className="text-red-600 ml-3 font-bold"
                    >
                      X
                    </button>
                    <svg  onClick={()=>editar(item.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5  ml-2 cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </div>
                )}
                {!item.status && (
                  <div className="flex">
                    <button
                      onClick={() => alterarStatus(item.id)}
                      className="w-14 bg-gray-300/40 rounded-md"
                    >
                      Inativo
                    </button>
                    <button
                      onClick={() => onClick(item.id)}
                      className="text-red-600 ml-3 font-bold"
                    >
                      X
                    </button>

                    <svg onClick={()=>editar(item.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5  ml-2 cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Excluir = ({ onClick, noremove }: PropsRemove) => {
  return (
    <div className="fixed w-full h-full bg-black/60 flex">
      <div className="w-full h-16 bg-black/90 text-center mt-32">
        <h1 className="text-white mt-2">Deseja mesmo excluir este registro?</h1>
        <div>
          <button
            onClick={onClick}
            className=" text-white px-2 py-1 hover:text-red-500"
          >
            Sim
          </button>
          <button
            onClick={noremove}
            className=" text-white px-2 py-1 hover:text-red-500"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export const Search = ({ buscar, set, value }: PropsSearch) => {
  return (
    <>
      <input
        value={value}
        placeholder="Digite o nome do colaborador"
        onChange={(e) => set(e.target.value)}
        type="text"
        className="border border-white  rounded-md sm:ml-16 w-60 mt-5 outline-white"
      />
      <button
        onClick={buscar}
        className=" px-1 text-white  border border-white rounded-md hover:text-green-600 hover:border-green-500"
      >
        Buscar
      </button>
    </>
  );
};

export const Formulario = ({voltar,addEmail,addFuncao,addNome,handleSubmit}:PropsForm)=>{

  return(
    <div className=" w-full h-full flex justify-center items-center  bg-gray-700">
      
      <form method="" onSubmit={(e)=>handleSubmit} className="">
        <p className="mb-10 "><input onChange={e => addNome(e.target.value)} required name="nome" placeholder="Nome" type="text" className="text-center rounded-md h-8 w-72 mt-10 placeholder:text-center outline-blue-600" /></p>
        <p className="mb-10"><input onChange={e => addEmail(e.target.value)} required name="email" placeholder="Email" type="text" className="text-center rounded-md h-8 w-72 placeholder:text-center outline-blue-600" /></p>
        <p className="mb-10 text-center"><input onChange={e => addFuncao(e.target.value)} required name="funcao" placeholder="Função" type="text"  className="text-center rounded-md h-8 placeholder:text-center outline-blue-600"/></p>
        <p className="mb-10 text-center"><input  type="submit"  value="Adicionar" className="text-blue-600 hover:text-green-500 cursor-pointer"/></p>
        <p className="text-center text-blue-600 hover:text-green-500"><input onClick={voltar} type="button" value="Voltar"  className="cursor-pointer"/></p>
      </form>
    </div>
  )
}


export const AbaEdicao = ({item,onClick,close}:PropsEdit)=>{

  const [ colaborador, setColaborador] = useState(item)
 

  const setValueNome = (valor:string)=>{
    setColaborador({...colaborador,nome:valor})
  }
  const setValueEmail = (valor:string)=>{
    setColaborador({...colaborador,email:valor})
  }
  const setValueFuncao = (valor:string)=>{
    setColaborador({...colaborador,funcao:valor})
  }

  return(

    <div  className="fixed w-full h-full bg-black/80 ">
      
    
      
    <div className="flex flex-col mt-32 sm:w-2/5 sm:mx-auto sm:mt-32">
    Nome: <input type="text" placeholder={colaborador.nome} onChange={e => setValueNome(e.target.value)} className="bg-black/80 border-b border-green-500 outline-none text-white text-center"/>
       Email: <input type="text" placeholder={colaborador.email} onChange={e => setValueEmail(e.target.value)} className="bg-black/80 border-b border-green-500 outline-none text-white text-center" />
       Função: <input type="text" placeholder={colaborador.funcao} onChange={e => setValueFuncao(e.target.value)}  className="bg-black/80 border-b border-green-500 outline-none text-white w-56 mx-auto text-center"/>
       <p className="text-white text-center mt-8"><button onClick={()=>onClick(colaborador)} className="px-2 py-1 bg-blue-500 rounded-md">Salvar</button></p>
       <p className="text-center mt-5"><button onClick={close} className="text-white hover:border-b border-blue-600">Sair </button> </p>
      
    
    </div>
      
    </div>

  )
}