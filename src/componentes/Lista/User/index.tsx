import { IUser } from '../../../types/user';
import style from '../Lista.module.scss';

interface Props extends IUser{
    selecionaUser: (userSelecionado:IUser)=>void
}

export default function User(
    {
        userNome,
        userCPF,
        userEmail,
        userTelefone,
        selecionado,
        userId,
        selecionaUser,
        userAtivo,
        userDataCriacao:string
    }:Props){
    return(
        //Style alterado quando o usuario esta ou nao selecionado e chamada que muda quando o usuario esta ou nao selecionado
        <li className={`${style.item} ${selecionado ? style.itemSelecionado: ''}`} onClick={()=>selecionaUser({
            userCPF,
            userEmail,
            userNome,
            userTelefone,
            selecionado,
            userId,
            userAtivo,
            userDataCriacao:string
        })}>
            <h3>
                {userNome}
            </h3>
            <h3>
                {userCPF}
            </h3> 
            <h3>
                {userEmail}
            </h3> 
            <h3>
                {userTelefone}
            </h3>  
        </li>
    )
}