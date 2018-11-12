import './form.css'

import React from 'react'

import Label from './label'
import Input from './input'
import Link from './link'
import Button from './button'

function Form(props) {
    return (
        <form className='form'>
            <h2 className='form__title'>
                {props.title}
            </h2>

            <p className='form__text'>
                {props.text}
            </p>

            {props.children}
        </form>
    )
}

Form.Label = Label
Form.Input = Input
Form.Link = Link
Form.Button = Button

export default Form