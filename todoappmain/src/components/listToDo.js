import React, { useEffect } from 'react'

import cross from '../assets/images/icon-cross.svg'
import check from '../assets/images/icon-check.svg'

import '../styles/listToDo.css'
import '../styles/global.css'

export default function ListToDo({arrayTasks}){
    function completed(e){
        arrayTasks.map((task) => {
            return task.id == e ? task.completed = true : console.log('oi')
        })
        console.log(arrayTasks)
        localStorage.setItem('tasks', JSON.stringify(arrayTasks))
    }

    function Delete(e){
        localStorage.setItem('tasks', JSON.stringify(arrayTasks.filter((task) => {
            return task.id == e ? false : true 
        })))
    }

    function ClearCompleted(){
        const clearCompleted = arrayTasks.filter((task) => 
            task.completed !== true ? true : false
        )
        console.log(arrayTasks)
        localStorage.setItem('tasks', JSON.stringify(clearCompleted))
    }
    
    return(
        <div className='content'>
            {arrayTasks.map((task) => {
            return  <div className={task.completed == true ? 'completed' : ''}>
                        <input type='radio' className='check'></input>
                        <label id={task.id} onClick={(e) => completed(e.target.id)}></label>
                        <p>{task.task}</p>
                        <article><img src={cross} alt='icone de excluir' id={task.id} onClick={(e) => Delete(e.target.id)}></img></article>
                    </div>
            })}
            <footer>
                5 items Left
                <section>
                    <p className='blue'>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                </section>
                <p onClick={() => ClearCompleted()}>Clear Completed</p>
            </footer>
        </div>
    )
}