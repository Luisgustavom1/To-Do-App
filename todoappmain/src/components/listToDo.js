import React from 'react'
import cross from '../assets/images/icon-cross.svg'
import '../styles/listToDo.css'
import '../styles/global.css'

export default function ListToDo(){
    return(
        <div className='content'>
             <div className='task'>
                <input type='radio' className='check'></input>
                <label></label>
                <p>Socar os </p>
                <article><img src={cross} alt='icone de excluir'></img></article>
            </div>
            <div className='task'>
                <input type='radio' className='check'></input>
                <label></label>
                <p>Socar os </p>
                <article><img src={cross} alt='icone de excluir'></img></article>
            </div>
            <div className='task'>
                <input type='radio' className='check'></input>
                <label></label>
                <p>Socar os </p>
                <article><img src={cross} alt='icone de excluir'></img></article>
            </div>
            <div className='task'>
                <input type='radio' className='check'></input>
                <label></label>
                <p>Socar os </p>
                <article><img src={cross} alt='icone de excluir'></img></article>
            </div>
            <div className='task'>
                <input type='radio' className='check'></input>
                <label></label>
                <p>Socar os </p>
                <article><img src={cross} alt='icone de excluir'></img></article>
            </div>
            <div className='task'>
                <input type='radio' className='check'></input>
                <label></label>
                <p>Socar os </p>
                <article><img src={cross} alt='icone de excluir'></img></article>
            </div>
            <footer>
                5 items Left
                <section>
                    <p className='blue'>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                </section>
                <p>Clear Completed</p>
            </footer>
        </div>
    )
}