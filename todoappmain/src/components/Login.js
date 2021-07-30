import React, { useContext, useState } from 'react'

import { useHistory } from 'react-router-dom'
import '../styles/login.css'
import '../styles/global.css'
import { toast } from 'react-toastify'
import AppContext from '../context/appContext'
import GetUsers from '../services/getUser'

export default function Login(){
    const { setToIsLoggedIn } = useContext(AppContext)
    const history = useHistory()

    function verification([user, password], usersBD){
        let validation = false;
        let userVerified = []
        for(var c = 0; c < usersBD.length; c++){
            if(usersBD[c].password == password && usersBD[c].usuario == user){
                validation = true;
                userVerified = usersBD.filter(users => {
                    if(users.usuario == user) return true
                })
            }
            return validation
        }

        return {validation, userVerified}
    }

    const login = async (ev) => {
        ev.preventDefault()

        const data = new FormData(ev.target)
        const user = data.get('user')
        const password = data.get('password')

        if(!user || !password){
            toast.error('Por favor preencha todos os campos')
            return
        }

        const databaseUsers = new GetUsers(process.env.REACT_APP_TOKEN)
        const users = databaseUsers.getUsers()

        console.log(databaseUsers.datasUsers)
        // if(verification([user, data], users).validation){
        //     // setToIsLoggedIn(true)
        //     // return history.push('/list')  
        //     console.log('oi')
        // } 

        toast.error('user ou senha inválidos')
    }
    return(
        <div className='divLogin'>
            <section>
                <h1>T O D O</h1>          
                <div>
                    <form to="/list" onSubmit={(e) => login(e)}>
                        <input type='text' name='user' placeholder='Insira seu usuário'></input>
                        <input type='password' name='password' placeholder='Insira sua senha'></input>
                        <button type='submit'>Entrar!</button>
                    </form>
                </div>
            </section>
        </div>
    )
}