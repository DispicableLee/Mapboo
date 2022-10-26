import React, { useEffect, useState } from 'react';
import FormCard from "./FormCard";


function Form () {

    const [comments, setComments] = useState([])
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [newComment, setNewComment] = useState("")

    console.log({name, city, state, country, newComment})
    

    useEffect(()=>{
      fetch("http://localhost:3000/comments")
      .then(res => res.json())
      .then(data => setComments(data))
    },
    [])

    const cardComponent = comments.map((comment)=>{
        return <FormCard key={comment.id} {...comment} />
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                name: name,
                city: city,
                state: state,
                country: country,
                comment: newComment
            })
            })
            .then(res => res.json())
            .then(newComment => handlePost(newComment))
        }

        function handlePost (newComment) {
            const newCommentArray = [...comments, newComment]
        setComments(newCommentArray)
        }
    
    return (
        <>
        <div className="form">

        <form onSubmit={handleSubmit}>

        <label for="name">Name</label>
        <input type="text" className="name" value={name} onChange={(e)=>setName(e.target.value)}/>

        <label for="city">City</label>
        <input type="text" className="city" value={city} onChange={(e)=>setCity(e.target.value)}/>

        <label for="state">State</label>
        <input type="text" className="state" value={state} onChange={(e)=>setState(e.target.value)}/>

        <label for="country">Country</label>
        <input type="text" className="country" value={country} onChange={(e)=>setCountry(e.target.value)}/>

        <label for="comment">Comment</label>
        <textarea className="comment" value={newComment} onChange={(e)=>setNewComment(e.target.value)}></textarea>

        <button type="submit" className="submit-button">Submit</button>
        </form>
        </div>

        <div className='card-container'>
        {cardComponent}
        </div>
        </>
    )
    
}

export default Form;