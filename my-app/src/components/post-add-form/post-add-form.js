import React from 'react';
import styled from 'styled-components';
import './post-add-form.css';

const Bottom = styled.div`
    display: flex;
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

const PostAddForm = ({onAdd}) => {
    return (
        <Bottom>
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('hello')}>
                Добавить</button>
        </Bottom>
    )
}

export default PostAddForm;