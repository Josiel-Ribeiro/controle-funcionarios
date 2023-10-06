"use client";
import { useState } from "react";
import { Excluir, Formulario, Header, Search, Section } from "./components/Componentes";
import { Colaboradores } from "./data/Colaboradores";
import { Funcionarios } from "./types/Funcionarios";

export const Page = () => {
  const listaOriginal = [...Colaboradores];
  const [lista, setLista] = useState(listaOriginal);
  const [itemExcluir, setItemExcluir] = useState(0);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [value, setvalue] = useState("");

  const setItemRemove = (id: number) => {
    setItemExcluir(id);
    setConfirmRemove(true);
  };

  const remove = () => {
    let newList = lista.filter((item) => item.id != itemExcluir);
    setLista(newList);
    setConfirmRemove(false);
  };

  const NoRemove = () => {
    setConfirmRemove(!confirmRemove);
  };

  const alterarStatus = (id: number) => {
    let newList = lista.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: !item.status,
        };
      } else {
        return item;
      }
    });

    setLista(newList);
  };

  const ativos = () => {
    let listaAitvos = listaOriginal.filter((item) => item.status === true);
    setLista(listaAitvos);
  };

  const inativos = () => {
    let listaAitvos = listaOriginal.filter((item) => item.status === false);
    setLista(listaAitvos);
  };

  const todos = () => {
    setLista(listaOriginal);
  };

  const set = (e: string) => {
    setvalue(e);
  };

  const buscar = () => {
    let results = listaOriginal.filter((item) =>
      item.nome.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
    );
    setLista(results);
    setvalue("")
  };

    const [showForm, setShowForm] = useState(false)
    const [data, setData] = useState<Funcionarios>({
      id:Math.floor(Math.random()*(10+1)),
      nome:"",
      email:"",
      funcao:"",
      status:true
    })

    const handleSubmit = (e:React.FormEvent) => {
      
      e.preventDefault(); // Evita que o formulário seja enviado por padrão
      // Faça o que quiser com os dados do formulário aqui
      console.log('Dados do formulário:', data);
  
      // Adicione 'data' à lista
      setLista([...lista, data]);}

    const newTela = ()=>{
      setShowForm(true)
    }

    const noTela = ()=>{
      setShowForm(false)
    }

    const formAdd = {
      addNome:(nome:string)=>{
        setData({...data,nome:nome})
      },
      addEmail:(email:string)=>{
        setData({...data,email:email})
      },
      addFuncao:(funcao:string)=>{
        setData({...data,funcao:funcao})
      }
    }
  
  

  return (
    <div className="w-screen h-screen border-b-4 border-red-500 bg-gray-600 ">
      {!showForm && <Header filterAtivos={ativos} all={todos} filterIntivos={inativos}newTela={newTela} />}

    {!showForm &&    <Section
        lista={lista}
        onClick={setItemRemove}
        alterarStatus={alterarStatus}
      />}

      {!showForm && <Search buscar={buscar} set={set} value={value}/>}

      {confirmRemove && <Excluir noremove={NoRemove} onClick={remove} />}

    {showForm  &&  <Formulario addEmail={formAdd.addEmail}addFuncao={formAdd.addFuncao}addNome={formAdd.addNome} voltar={noTela} handleSubmit={handleSubmit}/>}

</div>
  );
};

export default Page;
