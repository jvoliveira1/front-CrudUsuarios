import React,{useEffect, useState} from 'react';
import Botao from '../componentes/Botao';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import style from './App.module.scss';
import { IUser } from '../types/user';
import axios from 'axios';

function App() {
  //a lisata de usuarios usando o useState para poder atualizar no front
  const [users,setUsers] = useState<IUser[]|[]>([]);
  //Usuario selecionado na lista para identificacao em outras partes do projeto, aceita null quando nenhum esta selecionado
  const[selecionado,setSelecionado]=useState<IUser|null>();

  //Funcao GET puxando todos usuarios do DB
  useEffect(()=>{
    axios.get('/User')
      .then(resposta =>{
        console.log(resposta.data)
        setUsers(resposta.data)
      })
      .catch(erro =>{
        console.log(erro)
      })
  },[])

  //Funcao que muda o atributo selecionado, alterando o campo selecionado do usuario quando o mesmo for clicado
  function selecionaUser(userSelecionado:IUser){
    setSelecionado(userSelecionado.selecionado? null:userSelecionado);
    setUsers(usersAnteriores =>usersAnteriores.map(user =>({...user,selecionado:user.userId === userSelecionado.userId ? !user.selecionado:false})))
  }
  //Funcao DELETE no usuario marcado como slecionado
  async function deletaUser (){
    if (!selecionado){
      return
    }
    try 
    {
      await axios.delete(`/User/${selecionado.userId}`)
      setUsers(usersAnteriores =>usersAnteriores.filter(user=>user.userId!== selecionado.userId))
    }
    catch(erro)
    {
      console.log(erro)
    }
  }
  //Funcao UPDATE no usuario marcado como slecionado
  async function updateUser (){
    if (selecionado===undefined){
      return
    }
    try 
    {

    }
    catch(erro)
    {
      console.log(erro)
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setUser={setUsers} userSelecionado={selecionado}/>
      <Lista 
        users={users}
        selecionaUser={selecionaUser}
      />
      <Botao onClick={deletaUser}>
        Delete
      </Botao>
    </div>
  );
}

export default App;
