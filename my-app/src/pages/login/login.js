import React, { Component } from 'react'

import Form from '../../components/form'
import Container from '../../components/container';


class Login extends React.Component {
    constructor(props) {
        super()
        this.state = { disabled: true }
        this.email = React.createRef()
        this.password = React.createRef()
    }


    onDisabledButton = () => {
        console.log(`this.email =>`, this.email.current)
        const db_email = this.email.current
        const db_password = this.password.current

        if (db_email.hasError() && db_password.hasError()) {
            this.setState({ disabled: true })
        } else {
            this.setState({ disabled: false })
        }
    }


    render() {
        return (
            <Container>
                <Form
                    title='Login'
                    text='Entre com seu e-mail e senha'>

                    <Form.Label htmlFor='emailInput'>E-mail</Form.Label>
                    <Form.Input type='email' id='emailInput' placeholder='email@email.com' required onChanged={this.onDisabledButton} ref={this.email} />
                    <Form.Label htmlFor='passwordInput'>Senha</Form.Label>
                    <Form.Input type='password' id='passwordInput' placeholder='******' required minLength={6} onChanged={this.onDisabledButton} ref={this.password} />
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='#'>Criar uma conta</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Login

//className='email-input'
//className='password-input'