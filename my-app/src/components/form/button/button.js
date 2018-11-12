import './button.css'
import React from 'react'

function Button(props) {
    let classes = 'button'

    if (props.disabled) {
        classes += ' button--disable'
    } else {
        classes -= ''
    }

    return (
        <button disabled={props.disabled} className={classes}>
            {props.children}
        </button>
    )
}

export default Button