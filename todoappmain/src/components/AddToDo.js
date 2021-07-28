import React, { useState, useEffect } from 'react'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
import ListToDo from './listToDo'
import { toast } from 'react-toastify'

import '../styles/addToDo.css'

export default function AddToDo(){
    const [task, setTask] = useState('') 
    const [darkTheme, setDarkTheme] = useState(false)

    // const storage = {
    //     get(){
    //         return JSON.parse(localStorage.getItem('tasks')) || []
    //     },
    //     set(value){
    //         localStorage.setItem('tasks', JSON.stringify(value))
    //     }
    // }
    // let id = 1
    // const arrayTasks = [...storage.get()]

    const [tasks, setTasks] = useState([])
    const token = process.env.REACT_APP_TOKEN
    useEffect(() => {
        fetch('https://graphql.datocms.com/',
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
            query: '{ allTasks { id, job, isread } }'
            })
        }).then(res => res.json())
            .then(datas => setTasks(datas.data.allTasks))
            .catch(err => console.log(err))
    }, [])
    const [filter, setFilter] = useState(tasks)
    const arrayTasks = tasks
    

    let objectTasks = {}
    function addTask(){
        if(task.length !== 0){
            objectTasks.task = task
            objectTasks.isread = false
    
            arrayTasks.push(objectTasks)
            setFilter(arrayTasks)
            setTask('')
            toast.success('Task Adicionada com sucesso');
        }else{
            toast.error('Preencha todos os campos');
        }
    }
    function setDark(){
        document.querySelector('body').classList.toggle('dark')
        setDarkTheme(!darkTheme)
        console.log(darkTheme)
    }
    return(
        <>
            <main>
                <div className='header'>
                    <p>TODO</p>
                    <img src={darkTheme ? sun : moon} alt='Icon moon for dark theme' onClick={() => setDark()}></img>
                </div>
                <div className='add'>
                    {/* <img src={radioChecked}></img> */}
                    <input type='radio' className='check checked' checked='true'></input>
                    <label onClick={() => addTask()}></label>
                    <input type='text' id='addToDo' name='addToDo' placeholder='Create a new todo...' value={task} onChange={(e) => setTask(e.target.value)}></input>
                </div>
                <ListToDo arrayTasks={arrayTasks} filter={filter} setFilter={setFilter} tasks={tasks}/>
            </main>
        </>
    )
}