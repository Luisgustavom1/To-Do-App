import React, { useContext, useState } from 'react'

import { useHistory } from 'react-router-dom'
import '../styles/login.css'
import '../styles/global.css'
import { toast } from 'react-toastify'
import AppContext from '../context/appContext'

export default function Login(){
    const { setToIsLoggedIn } = useContext(AppContext)
    const [users, setUsers] = useState([])
    const history = useHistory()

    function verification(user, password, usersBD){
        let validation = false;
        let userVerified;

        usersBD.map(users => {
            if(users.usuario === user && users.password === password){
                validation = true
                userVerified = usersBD.filter(users => users.usuario === user)
            }
            return {validation, userVerified}
        })
        return {validation, userVerified}
    }

    function getUsers(){
        const token = process.env.REACT_APP_TOKEN;

        fetch('https://graphql.datocms.com/',
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
            query: '{ allUsers { usuario, password, createSlug } }'
            })
        }).then(async res => {
            const datas = await res.json();
            setUsers(datas.data.allUsers);
        })
        .catch(err => console.log(err))
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

        await getUsers()
        console.log(users)
        if(verification(user, password, users).validation){
            setToIsLoggedIn(true)
            return history.push('/list')  
        } 

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