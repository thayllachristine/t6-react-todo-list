import React, { Component } from 'react'

import Container from '../../components/container'
import Form from '../../components/form'


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { disabled: true }
        this.name = React.createRef()
        this.email = React.createRef()
        this.phone = React.createRef()
        this.password = React.createRef()
    }


    onDisabledButton = () => {
        const db_name = this.name.current
        const db_email = this.email.current
        const db_phone = this.phone.current
        const db_password = this.password.current

        if (db_name.hasError() ||
            db_email.hasError() ||
            db_phone.hasError() ||
            db_password.hasError()) {
            this.setState({ disabled: true })
        } else {
            this.setState({ disabled: false })
        }
    }


    render() {
        return (
            <Container>
                <Form
                    title='Cadastra-se'
                    text='Informe seus dados:'>

                    <Form.Label htmlFor='namelInput'>Nome</Form.Label>
                    <Form.Input type='text' id='namelInput' className='name-input' placeholder='Nome' onChanged={this.onDisabledButton} ref={this.name} required />
                    <Form.Label htmlFor='emailInput'>E-mail</Form.Label>
                    <Form.Input type='email' id='emailInput' className='email-input' placeholder='email@email.com' required onChanged={this.onDisabledButton} ref={this.email} />
                    <Form.Label htmlFor='telInput'>Telefone</Form.Label>
                    <Form.Input type='text' id='telInput' className='telephone-input' placeholder='+55 (XX) XXXX-XXXX' onChanged={this.onDisabledButton} ref={this.phone} />
                    <Form.Label htmlFor='passwordInput'>Senha</Form.Label>
                    <Form.Input type='password' id='passwordInput' className='password-input' minLength={6} placeholder='******' required onChanged={this.onDisabledButton} ref={this.password} />
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='#'>Fazer login</Form.Link>
                </Form>
            </Container>
        )
    }
}


export default SignUp