import './alert.css'
import React from 'react'

function Alert(props) {
    return (
        <div className={`alert alert__color-${props.cor}`} >
            <p className='alert__texto'>{props.children} </p>
        </div>
    )
}

export default Alert