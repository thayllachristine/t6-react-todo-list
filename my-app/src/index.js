import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import Form from './components/form/form'

import * as serviceWorker from './serviceWorker';

const component = <Form
    title='Login'
    text='Entre com seu e-mail e senha'>

    <Form.Label htmlFor='emailInput'>E-mail</Form.Label>
    <Form.Input type='text' id='emailInput' className='email-input' placeholder='email@email.com' />
    <Form.Label htmlFor='passwordInput'>E-mail</Form.Label>
    <Form.Input type='password' id='passwordInput' className='password-input' placeholder='******' />
    <Form.Button disabled>Enviar</Form.Button>
    <Form.Link href='#'>Criar uma conta</Form.Link>
</Form>


ReactDOM.render(component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
