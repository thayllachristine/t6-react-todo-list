import React, { Component } from 'react'

import '../pageNotFound/pagenotfound.css'
import NotFoundImage from './pagenotfound.png'


function PageNotFound() {
    return (
        <div className='page-not-found'>
            <h1>Página Não Encontrada</h1>
            <img src={NotFoundImage} />
        </div>
    )
}


export default PageNotFound