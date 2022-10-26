import React from 'react';


function Form () {

    return (
        <div class="form">

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

        <input type="submit" className="submit-button" value="Submit"/>

        </div>
    )
}

export default Form;