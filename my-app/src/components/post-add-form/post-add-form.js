import React, {Component} from 'react';
import styled from 'styled-components';
import './post-add-form.css';

const Bottom = styled.form`
    display: flex;
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text !== "") {
            this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
        } else {
            console.log('Напишите что-нибудь!');
        }       
    }

    render() {
        return (
            <Bottom
            onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>
            </Bottom>
        )
    }
    
}