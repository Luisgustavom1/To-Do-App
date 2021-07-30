import React, { useState, useContext } from 'react'

import UseRemoveTask from '../utils/useRemoveTask'
import UseUpdateTask from '../utils/useUpdateTask'
import UseRemoveCompleted from '../utils/useRemoveCompleted'
import AppContext from '../context/appContext'
import cross from '../assets/images/icon-cross.svg'
import '../styles/listToDo.css'
import '../styles/global.css'

export default function ListToDo({ getTasks }){    
    const { tasks, setToTasks } = useContext(AppContext) 
    const [filter, setFilter] = useState(tasks)
    
    async function completed(e){
        await UseUpdateTask(e.target.id, 'true')
        .then(res => {
            let index
            for(var i in tasks){
                if(tasks[i].id == res.id){
                    index = i
                }
            }
            const tasksUpdated = [...tasks]
            tasksUpdated.splice(index, 1, res)
            setToTasks(tasksUpdated)
        })
    }

    async function deletar(e){
        await UseRemoveTask(e.target.id)
        .then(res => {
            let index
            for(var i in tasks){
                if(tasks[i].id == res.id){
                    index = i
                }
            }
            tasks.splice(index, 1)
            const tasksRemovedUpdated = [...tasks]
            setToTasks(tasksRemovedUpdated)
        })
    }

    async function ClearCompleted(){
        const completed = []
        tasks.filter(task => task.done == 'true' && true).map(taskCompleted => completed.push(taskCompleted.id))
        await UseRemoveCompleted(completed)
        // .then(res => {
        //     while(){

        //     }
        // })
    }

    async function blue(e){
        await document.querySelectorAll('.section > *').forEach(p => {p.classList.remove('blue')})
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
                    <p id='1' className='blue' onClick={(e) => {
                        setFilter(tasks)
                        blue(e)
                    }}>All</p>

                    <p id='2' onClick={(e) => {
                        setFilter(tasks.filter((task) => task.done !== 'true' )) 
                        blue(e)
                        }}>Active</p>

                    <p id='3' onClick={(e) => {
                        setFilter(tasks.filter((task) => task.done == 'true' ))
                        blue(e)
                        }}>Completed</p>
                </section>
                <p onClick={() => ClearCompleted()}>Clear Completed</p>
            </footer>
        </div>
    )
}