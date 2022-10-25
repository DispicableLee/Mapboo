import React from 'react';

function Form () {

    return (
        <div className="form-container">
            <div className="card">
                <div className="avatar">avatar</div>
                <div className="timestamp">timestamp</div>
                <p className="comment-card">commentcard</p>
            </div>
        <div className="location">
            <input placeholder="Current Location"/>
            </div>
            <div className="comment">
                <input placeholder="Comment"/>
            </div>
        </div>
    )
}

export default Form;