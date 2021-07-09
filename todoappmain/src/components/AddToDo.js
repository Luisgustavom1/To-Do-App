import React from 'react'
import darkTheme from '../assets/images/icon-moon.svg'
import radioChecked from '../assets/images/icon-check.svg'

import '../styles/addToDo.css'


export default function AddToDo(){
    return(
        <>
            <div className='header'>
                <p>TODO</p>
                <img src={darkTheme} alt='Icon moon for dark theme'></img>
            </div>
            <div className='add'>
                {/* <img src={radioChecked}></img> */}
                <input type='radio' className='check checked' checked='true'></input>
                <label ></label>
                <input type='text' id='addToDo' name='addToDo' placeholder='Create a new todo...'></input>
            </div>
        </>
    )
}