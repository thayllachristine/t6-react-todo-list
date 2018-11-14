import './input.css'

import React, { Component } from 'react'


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = { message: null }
        // this.handleChange = this.handleChange.bind(this)
    }


    hasError = () => {
        if (this.state.message) {
            return true
        } else {
            return false
        }
    }


    handleChange = (e) => {
        const value = e.target.value
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let message = ``

        console.log('oi', value)

        if (this.props.required && value.trim() === ``) {
            message = `Campo obrigatório`
        } else if (this.props.minLength && value.length < (this.props.minLength - 1)) {
            message = `Digite pelo menos ${this.props.minLength} caracteres!`
        } else if (this.props.type === `email` && !regex.test(value)) {
            message = `Digite um e-mail válido`
        }

        this.setState({ message: message }, this.props.onChanged())
    }


    render() {
        return (
            <React.Fragment>
                <input
                    onChange={this.handleChange}
                    onBlur={this.handleChange}

                    type={this.props.type}
                    id={this.props.id}
                    className='input'
                    placeholder={this.props.placeholder}

                    required={this.props.required}
                />

                <p className='input__erro'>{this.state.message}</p>

            </React.Fragment>
        )
    }

}



export default Input