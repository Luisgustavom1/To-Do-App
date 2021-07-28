import React from 'react'

import { useHistory } from 'react-router-dom'
import '../styles/login.css'
import '../styles/global.css'
import { toast } from 'react-toastify'

export default function Login(){
    const history = useHistory()
    const login = (ev) => {
        ev.preventDefault()
        const data = new FormData(ev.target)
        if(!data.get('usuario') || !data.get('password')){
            toast.error('Por favor preencha todos os campos')
            return
        }
        history.push('/list')
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