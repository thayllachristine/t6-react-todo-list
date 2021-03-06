import './input.css'

import React, { Component } from 'react'


function Input(props) {
    return (
        <input
            type={props.type}
            id={props.id}
            className='input'
            placeholder={props.placeholder}
        />
    )
}


export default Input