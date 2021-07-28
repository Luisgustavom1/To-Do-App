import React, { useContext, useState, useEffect } from 'react'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
import ListToDo from './listToDo'
import { toast } from 'react-toastify'

import '../styles/addToDo.css'
import AppContext from '../context/appContext'
import UseSetTasks from '../utils/useSetTasks'

export default function AddToDo(){
    const { setToTasks } = useContext(AppContext) 
    const [task, setTask] = useState('')
    const [darkTheme, setDarkTheme] = useState(false)

    const token = process.env.REACT_APP_TOKEN
    
    const getTasks = () => {
        fetch('https://graphql.datocms.com/',
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
            query: '{ allTasks { id, task, done, createSlug } }'
            })
        }).then(res => res.json())
            .then(datas => {
                setToTasks(datas.data.allTasks)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        return getTasks()
    },[])

    async function addTask() {
        if(task.length !== 0){
            await UseSetTasks(task, 'false', 'luisgustavom1')
            getTasks()
            setTask('')
            toast.success('Task Adicionada com sucesso');
        } else {
            toast.error('Preencha todos os campos');
        }
    }

    function setDark(){
        document.querySelector('body').classList.toggle('dark')
        setDarkTheme(!darkTheme)
    }
    return(
        <>
            <main>
                <div className='header'>
                    <p>TODO</p>
                    <img src={darkTheme ? sun : moon} alt='Icon moon for dark theme' onClick={() => setDark()}></img>
                </div>
                <div className='add'>
                    <input type='radio' className='check checked' checked='true'></input>
                    <label onClick={() => addTask()}></label>
                    <input type='text' id='addToDo' name='addToDo' placeholder='Create a new todo...' value={task} onChange={(e) => setTask(e.target.value)}></input>
                </div>
                <ListToDo/>
            </main>
        </>
    )
}