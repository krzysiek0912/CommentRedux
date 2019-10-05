import React from 'react';
import "./Comment.css";

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>

    <div className="media">
        
        <div className="media-body">
            
            <p className="media-heading user_name">{text}</p>
            
            <div className="qty">
                <span 
                    onClick={() => thumbDownComment(id)} 
                    className="minus bg-dark"
                >-</span>
                <strong>{votes}</strong>
                <span 
                    onClick={() => thumbUpComment(id)} 
                    className="plus bg-dark"
                >+</span>
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={() => removeComment(id)}
                >Remove Comment</button>                 
            </div> 
            
        </div>
    </div>;

export default Comment;