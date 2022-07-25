import React, { useContext, useEffect, useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import {IUser} from '../../types/user'
import axios from "axios";


interface Props{
    
    setUser: React.Dispatch<React.SetStateAction<IUser[]>>
    userSelecionado?:IUser|null
    
}

function Formulario({setUser,userSelecionado}:Props){


    const [userNome,setUserNome]=useState('');
    const [userCPF,setUserCPF]=useState('');
    const [userEmail,setUserEmail]=useState('');
    const [userTelefone,setUserTelefone]=useState('');
    const [userId,setUserId]=useState('');
    const [userAtivo,setUserAtivo]=useState(true);
    const [userDataCriacao,setUserDataCriacao]=useState('');

    useEffect(()=>{
        setUserNome(userSelecionado? userSelecionado.userNome:'')
        setUserCPF(userSelecionado? userSelecionado.userCPF:'')
        setUserEmail(userSelecionado? userSelecionado.userEmail:'')
        setUserTelefone(userSelecionado? userSelecionado.userTelefone:'')
    },[userSelecionado])

    async function adicionarUser(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();

        const newUser ={
            userNome,
            userCPF,
            userEmail,
            userTelefone,
            userAtivo:true,
            userDataCriacao
        }

        try 
        {
            const resposta = await axios.post('/User',newUser);
            setUser(userAntigas=>
                [
                    ...userAntigas,{
                        ...newUser,
                        //gerar usuario como nao seleiconado
                        selecionado:false,
                        //id do banco de dados
                        userId: resposta.data.userId
                    }
                ]
            );
            //limpando os input depois da criacao do usuario
            setUserNome("");
            setUserCPF("");
            setUserEmail("");
            setUserTelefone("");
        }
        catch(erro){console.log(erro)}

    }
    async function updateUser(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();

        const updatedUser ={
            userNome,
            userCPF,
            userEmail,
            userTelefone
        }

        try 
        {   
            
            if(userSelecionado){
                const resposta = await axios.put(`/User/${userSelecionado.userId}`,updatedUser);
                
                setUser(userAntigas=>
                    userAntigas.map(user => {
                        if(user.userId === userSelecionado.userId){
                            return{...user,
                                ...updatedUser
                            }
                        }
                        return user;
                    })
                );
            }
        }
        catch(erro){console.log(erro)}

    }
    return(
        <form className={style.novoUser} onSubmit={userSelecionado? updateUser:adicionarUser}>
                <div className={style.inputContainer}>
                    <label htmlFor="UserNome">
                        Nome do usuario
                    </label>
                    <input
                        type="text"
                        name="UserNome"
                        id="UserNome"
                        value={userNome}
                        onChange={evento => setUserNome(evento.target.value)}
                        placeholder="Nome do usuario"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="UserCpf">
                        Cpf do usuario
                    </label>
                    <input
                        type="text"
                        name="UserCpf"
                        id="UserCpf"
                        value={userCPF}
                        onChange={evento => setUserCPF(evento.target.value)}
                        placeholder="Cpf do usuario"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="UserEmail">
                        Email do usuario
                    </label>
                    <input
                        type="text"
                        name="UserEmail"
                        id="UserEmail"
                        value={userEmail}
                        onChange={evento => setUserEmail(evento.target.value)}
                        placeholder="Email do usuario"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="UserTelefone">
                        Telefone do usuario
                    </label>
                    <input
                        type="text"
                        name="UserTelefone"
                        id="UserTelefone"
                        value={userTelefone}
                        onChange={evento => setUserTelefone(evento.target.value)}
                        placeholder="Telefone do usuario"
                        required
                    />
                </div>
                <Botao type="submit">
                    {userSelecionado? "Update":"Adicionar"}
                </Botao>
            </form>      
    )
}

export default Formulario;