import React, { useState, useContext } from 'react'

import UseRemoveTask from '../utils/useRemoveTask'
import UseUpdateTask from '../utils/useUpdateTask'
import UseRemoveCompleted from '../utils/useRemoveCompleted'
import AppContext from '../context/appContext'
import cross from '../assets/images/icon-cross.svg'
import '../styles/listToDo.css'
import '../styles/global.css'

export default function ListToDo({ arrayTasks }){    
    const { tasks, setToTasks } = useContext(AppContext) 
    const [filter, setFilter] = useState(tasks)
    
    async function completed(e){
        await UseUpdateTask(e.target.id, 'true')
    }

    async function deletar(e){
        await UseRemoveTask(e.target.id)
    }

    async function ClearCompleted(){
        const completed = []
        tasks.filter(task => task.done == 'true' && true).map(taskCompleted => completed.push(taskCompleted.id))
        await UseRemoveCompleted(completed)
    }

    async function blue(e){
        await document.querySelectorAll('.section > *').forEach(p => {p.classList.remove('blue')})
        console.log(e.target.id)
        document.getElementById(`${e.target.id}`).classList.add('blue')
    }
    return(
        <div className='content'>
            {tasks.map((task) => {
            return  <div className={task.done == 'true' ? 'completed' : ''} key={task.id}>
                        <input type='radio' className='check'></input>
                        <label id={task.id} key={task.id} onClick={(ev) => completed(ev)}></label>
                        <p>{task.task}</p>
                        <aside><img src={cross} alt='icone de excluir' id={task.id} onClick={(e) => deletar(e)}></img></aside>
                    </div>
            })}
            <footer>
                {filter.length} items Left
                <section className='section'>
                    <p id='1' className='blue' onClick={(ev) => {
                        setFilter(tasks)
                        blue(ev)
                    }}>All</p>

                    <p id='2' onClick={(ev) => {
                        setFilter(tasks.filter((task) => task.done !== 'true' )) 
                        blue(ev)
                        }}>Active</p>

                    <p id='3' onClick={(ev) => {
                        setFilter(tasks.filter((task) => task.done == 'true' ))
                        blue(ev)
                        }}>Completed</p>
                </section>
                <p onClick={() => ClearCompleted()}>Clear Completed</p>
            </footer>
        </div>
    )
}