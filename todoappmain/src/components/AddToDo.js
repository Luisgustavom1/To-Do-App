import React, { useEffect, useState } from 'react'
import darkTheme from '../assets/images/icon-moon.svg'
import radioChecked from '../assets/images/icon-check.svg'
import ListToDo from './listToDo'

import '../styles/addToDo.css'

export default function AddToDo(){
    const [task, setTask] = useState('')   
    const storage = {
        get(){
            return JSON.parse(localStorage.getItem('tasks')) || []
        },
        set(value){
            localStorage.setItem('tasks', JSON.stringify(value))
        }
    }
    let id = 1
    
    let arrayTasks = storage.get()
    let objectTasks = {}
    function addTask(){
        objectTasks.task = task
        objectTasks.id = arrayTasks == '' ? 1 : arrayTasks[arrayTasks.length -1].id + 1
        objectTasks.completed = false

        arrayTasks.push(objectTasks)
        storage.set(arrayTasks)
        console.log(arrayTasks)
        document.querySelector('#addToDo').value = ''
    }
    return(
        <>
            <div className='header'>
                <p>TODO</p>
                <img src={darkTheme} alt='Icon moon for dark theme'></img>
            </div>
            <div className='add'>
                {/* <img src={radioChecked}></img> */}
                <input type='radio' className='check checked' checked='true'></input>
                <label onClick={() => addTask()}></label>
                <input type='text' id='addToDo' name='addToDo' placeholder='Create a new todo...' value={task} onChange={(e) => setTask(e.target.value)}></input>
            </div>
            <ListToDo arrayTasks={arrayTasks}/>
        </>
    )
}