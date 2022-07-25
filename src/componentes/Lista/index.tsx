import User from "./User";
import style from './Lista.module.scss';
import {IUser} from '../../types/user'

interface Props{
    users:IUser[]
    selecionaUser: (userSelecionado:IUser)=>void
}

function Lista({users,selecionaUser}:Props){
    
    return(
        <aside className={style.listaUsers}>
            <h2> Lista de Usuarios</h2>
            <ul>
                {users.map((user) =>(
                    <User
                        //Passa o usuario selecionado que usa o ID pra identificacao
                        selecionaUser={selecionaUser}
                        key={user.userId}
                        {...user}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;