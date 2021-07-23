import React, { useState } from 'react'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
import ListToDo from './listToDo'

import '../styles/addToDo.css'

export default function AddToDo(){
    const [task, setTask] = useState('') 
    const [darkTheme, setDarkTheme] = useState(false)
    const storage = {
        get(){
            return JSON.parse(localStorage.getItem('tasks')) || []
        },
        set(value){
            localStorage.setItem('tasks', JSON.stringify(value))
        }
    }
    let id = 1
    const arrayTasks = [...storage.get()]
    const [filter, setFilter] = useState(arrayTasks)
    
    let objectTasks = {}
    function addTask(){
        if(task.length !== 0){
            objectTasks.task = task
            objectTasks.id = arrayTasks == '' ? 1 : arrayTasks[arrayTasks.length -1].id + 1
            objectTasks.completed = false
    
            arrayTasks.push(objectTasks)
            storage.set(arrayTasks)
            setFilter(arrayTasks)
            setTask('')
        }else{
            alert('Digite alguma coisa')
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
                <ListToDo arrayTasks={arrayTasks} filter={filter} setFilter={setFilter}/>
            </main>
        </>
    )
}