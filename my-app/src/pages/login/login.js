import React from 'react'

import Form from '../../components/form'


function Login() {
    return (
        <Form
            title='Login'
            text='Entre com seu e-mail e senha'>

            <Form.Label htmlFor='emailInput'>E-mail</Form.Label>
            <Form.Input type='text' id='emailInput' className='email-input' placeholder='email@email.com' />
            <Form.Label htmlFor='passwordInput'>Senha</Form.Label>
            <Form.Input type='password' id='passwordInput' className='password-input' placeholder='******' />
            <Form.Button disabled>Enviar</Form.Button>
            <Form.Link href='#'>Criar uma conta</Form.Link>
        </Form>
    )
}

export default Login