import React, { Component } from 'react'

import Form from '../../components/form'
import Container from '../../components/container';


class Login extends React.Component {
    constructor(props) {
        super()
        this.state = { disabled: true }
    }

    onDisabledButton = () => {

    }

    render() {
        return (
            <Container>
                <Form
                    title='Login'
                    text='Entre com seu e-mail e senha'>

                    <Form.Label htmlFor='emailInput'>E-mail</Form.Label>
                    <Form.Input type='email' id='emailInput' className='email-input' placeholder='email@email.com' required onChanged={this.onDisabledButton} />
                    <Form.Label htmlFor='passwordInput'>Senha</Form.Label>
                    <Form.Input type='password' id='passwordInput' className='password-input' placeholder='******' required minLength={6} onChanged={this.onDisabledButton} />
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='#'>Criar uma conta</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Login