import React, {useEffect, useState } from 'react'

import cross from '../assets/images/icon-cross.svg'
import '../styles/listToDo.css'
import '../styles/global.css'

export default function ListToDo({arrayTask}){
    const [arrayTasks, setArrayTasks] = useState(JSON.parse(localStorage.getItem('tasks')))
    const [filter, setFilter] = useState(arrayTask)
    
    let arrayTasksFilter = filter

    function completed(e){
        arrayTasks.map((task) => {
            return task.id == e ? task.completed = true : console.log('oi')
        })
        localStorage.setItem('tasks', JSON.stringify(arrayTasks))
        setFilter(JSON.parse(localStorage.getItem('tasks')))
    }

    function deletar(e){
        const deletTask = arrayTasks.filter(task => task.id == e.target.id ? false : true) 
        localStorage.setItem('tasks', JSON.stringify(deletTask))
        setFilter(JSON.parse(localStorage.getItem('tasks')))
    }

    function ClearCompleted(){
        const clearCompleted = arrayTasks.filter((task) => 
            task.completed !== true ? true : false
        )
        localStorage.setItem('tasks', JSON.stringify(clearCompleted))
        setFilter(JSON.parse(localStorage.getItem('tasks')))
    }
    
    return(
        <div className='content'>
            {arrayTasksFilter.length > 0 && arrayTasksFilter.map((task) => {
            return  <div className={task.completed == true ? 'completed' : ''}>
                        <input type='radio' className='check'></input>
                        <label id={task.id} key={task.id} onClick={(e) => completed(e.target.id)}></label>
                        <p>{task.task}</p>
                        <aside><img src={cross} alt='icone de excluir' id={task.id} onClick={(e) => deletar(e)}></img></aside>
                    </div>
            })}
            <footer>
                {arrayTasksFilter.length} items Left
                <section>
                    <p className='blue' onClick={() => setFilter(arrayTasks)}>All</p>
                    <p onClick={() => setFilter(arrayTasks.filter((task) => task.completed !== true ? true : false))}>Active</p>
                    <p onClick={() => setFilter(arrayTasks.filter((task) => task.completed == true ? true : false))}>Completed</p>
                </section>
                <p onClick={() => ClearCompleted()}>Clear Completed</p>
            </footer>
        </div>
    )
}