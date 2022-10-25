import React from 'react';


function Form () {

    return (
        <form className='addComment'>
            <label >
            <input 
            className='inputStyle'
            type="text"
            id="comment" 
            placeholder='comment'/>
            </label>
            <label >
            <input
            className='inputStyle'
            type="text"
            id="city" 
            placeholder='city'/>
             </label>
            <label >
            <input 
            className='inputStyle'
            type="text"
            id="state" 
            placeholder='state'/>
            </label>
            
            <label >
            <input 
            className='inputStyle'
            type="text"
            id="postal-code" 
            placeholder='postal code'/>
             </label>
            <label >
            <input 
            className='inputStyle'
            type="text"
            id="address" 
            placeholder='address'/>
             </label>
             <label >
            <input 
            className='inputStyle'
            type="text"
            id="country" 
            placeholder='country'/>
             </label>
             <button type ="submit">Add Comment</button>
        </form>
    )
}

export default Form;