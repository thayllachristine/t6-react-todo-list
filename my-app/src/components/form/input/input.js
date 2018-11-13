import './input.css'

import React, { Component } from 'react'


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = { message: false }
        // this.handleChange = this.handleChange.bind(this)
    }


    handleChange = (e) => {
        const value = e.target.value
        let message = ``

        console.log('oi', value)

        if (this.props.required && value.trim() === ``) {
            message = `Campo obrigatório`
        }

        this.setState({ message: message })
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