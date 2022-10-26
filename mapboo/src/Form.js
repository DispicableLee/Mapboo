import React, { useEffect, useState } from 'react';
import FormCard from "./FormCard";


function Form () {

    const [comments, setComments] = useState([])

    useEffect(()=>{
      fetch("http://localhost:3000/comments")
      .then(res => res.json())
      .then(data => setComments(data))
    },
    [])

    const cardComponent = comments.map((comment)=>{
        return <FormCard key={comment.id} {...comment} />
    })

    return (
        <>
        <div className="form">

        <label for="Name">Name</label>
        <input type="text" className="name"/>

        <label for="city">City</label>
        <input type="text" className="city"/>

        <label for="state">State</label>
        <input type="text" className="state"/>

        <label for="country">Country</label>
        <input type="text" className="country"/>

        <label for="comment">Comment</label>
        <textarea className="comment"></textarea>

        <input type="submit" className="submit-button" value="Submit"/>

        </div>

        <div className='card-container'>
        {cardComponent}
        </div>
        </>
    )
    
}

export default Form;