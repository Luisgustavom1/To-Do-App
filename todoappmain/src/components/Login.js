import React, { useContext, useState } from 'react'

import { useHistory } from 'react-router-dom'
import '../styles/login.css'
import '../styles/global.css'
import { toast } from 'react-toastify'
import AppContext from '../context/appContext'
import getUsers from '../services/getUser'

export default function Login(){
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const { setToIsLoggedIn } = useContext(AppContext)
    const history = useHistory()

    const login = async (ev) => {
        ev.preventDefault()
        const data = new FormData(ev.target)
        if(!data.get('usuario') || !data.get('password')){
            toast.error('Por favor preencha todos os campos')
            return
        }
        setUsuario(data.get('usuario'))
        setPassword(data.get('password'))
        // if(usuario === userBaseData && password === passwordBaseData){
        //     setToIsLoggedIn(true)
            // history.push('/list')
        // }
        console.log(getUsers())
    }
    return(
        <div className='divLogin'>
            <section>
                <h1>T O D O</h1>          
                <div>
                    <form to="/list" onSubmit={(e) => login(e)}>
                        <input type='text' name='usuario' placeholder='Insira seu usuário'></input>
                        <input type='password' name='password' placeholder='Insira sua senha'></input>
                        <button type='submit'>Entrar!</button>
                    </form>
                </div>
            </section>
        </div>
    )
}