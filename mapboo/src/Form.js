import React from 'react';
import FormCard from "./FormCard"


function Form () {

    return (
        <>
        <div className="form">

        <label for="Name">Name</label>
        <input type="text" className="name"/>

        <label for="Street">Street</label>
        <input type="text" className="street"/>

        <label for="city">City</label>
        <input type="text" className="city"/>

        <label for="state">State</label>
        <input type="text" className="state"/>

        <label for="zip-code">Zip Code</label>
        <input type="text" className="zip-code"/>

        <label for="country">Country</label>
        <input type="text" className="country"/>

        <label for="comment">Comment</label>
        <textarea className="comment"></textarea>

        <input type="submit" className="submit-button" value="Submit"/>

        </div>

        <div className='card-container'>
        {"card component"}
        </div>
        </>
    )
    
}

export default Form;