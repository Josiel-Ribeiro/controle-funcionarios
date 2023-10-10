"use client";
import { useState } from "react";
import { AbaEdicao, Excluir, Formulario, Header, Search, Section } from "./components/Componentes";
import { Colaboradores } from "./data/Colaboradores";
import { Funcionarios } from "./types/Funcionarios";

export const Page = () => {435697
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
    
    const newTela = ()=>{
      setShowForm(true)
    }

    const noTela = ()=>{
      setShowForm(false)
    }

   

    

  
    const [showEdit, setShowEdit] = useState(false)
    const [itemEdit, setItemEdit] = useState<Funcionarios>({id: 1,
      nome: 'Nome do Funcionário',
      email: 'email@exemplo.com',
      funcao: 'Função do Funcionário',
      status: true,})

    const editar = (id:number)=>{

      setShowEdit(true)

      let newList = [...lista]

      let item = newList.find(colaborador => colaborador.id === id)

      if(item){
        setItemEdit(item)
      }

    }

    const closeEdit = ()=>{
      setShowEdit(false)
    }

    const salvar = (item:Funcionarios)=>{

      const newList:Funcionarios[] = lista.map((colaborador)=>{

        if(colaborador.id === item.id){
          return{...colaborador, nome:item.nome,email:item.email,funcao:item.funcao}
        }else{
          return colaborador
        }
      })

      setLista(newList)
      setShowEdit(false)

    }
  

  return (
    <div className="w-screen h-screen border-b-4 border-red-500 bg-gray-600 ">
      {!showForm && <Header filterAtivos={ativos} all={todos} filterIntivos={inativos}newTela={newTela} />}

    {!showForm &&    <Section
        lista={lista}
        onClick={setItemRemove}
        alterarStatus={alterarStatus}editar={editar}
      />}

      {!showForm && !showEdit && <Search buscar={buscar} set={set} value={value}/>}

      {confirmRemove && <Excluir noremove={NoRemove} onClick={remove} />}

    {showForm  &&  <Formulario  voltar={noTela} />}

    {
      showEdit && <AbaEdicao item={itemEdit} onClick={salvar}close={closeEdit}/>
    }

</div>


  );
};

export default Page;
