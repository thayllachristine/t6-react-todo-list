import React from 'react'

import Form from '../../components/form'

function SignUp() {
    return (
        <Container>
            <Form
                title='Cadastra-se'
                text='Informe seus dados:'>

                <Form.Label htmlFor='namelInput'>Nome</Form.Label>
                <Form.Input type='text' id='namelInput' className='name-input' placeholder='Nome' />
                <Form.Label htmlFor='emailInput'>E-mail</Form.Label>
                <Form.Input type='text' id='emailInput' className='email-input' placeholder='email@email.com' />
                <Form.Label htmlFor='telInput'>Telefone</Form.Label>
                <Form.Input type='text' id='telInput' className='telephone-input' placeholder='+55 (XX) XXXX-XXXX' />
                <Form.Label htmlFor='passwordInput'>Senha</Form.Label>
                <Form.Input type='password' id='passwordInput' className='password-input' placeholder='******' />
                <Form.Button disabled>Enviar</Form.Button>
                <Form.Link href='#'>Fazer login</Form.Link>
            </Form>
        </Container>
    )
}

export default SignUp