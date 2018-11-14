import './link.css'

import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

function Link(props) {
    return (
        <LinkRouter
            id={props.id}
            to={props.href}
            className='link'
        >
            {props.children}
        </LinkRouter>
    )
}

export default Link