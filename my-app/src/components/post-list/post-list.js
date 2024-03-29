import React from 'react';

import './post-list.css';

import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';

const PostList = ({posts, onDelete, onToggleButtons}) => {

    const elements = posts.map( (item) => {
        
        if (typeof item == "object") {
            const {id, ...itemProps} = item
            return (
                <li key={id} className="list-group-item">
                    <PostListItem 
                        {...itemProps}
                        onDelete={ () => onDelete(id)}
                        onToggleImportant={ () => onToggleButtons(id, "important")}
                        onToggleLiked={ () => onToggleButtons(id, "like")}    
                    />
                </li>
            )   
        }        
    });

    return (
        <ListGroup className="app-list list-group"> 
            {elements}
        </ListGroup>
    )
}

export default PostList;