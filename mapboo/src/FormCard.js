import React from 'react';

function FormCard({ id, name, street, city, state, zip, country, comment}){
    return (
        <li className="card">
        <div className="details">
          <h1>{name}</h1>
          <span> · {city}{state}</span>
          <h3>{comment}</h3>
        </div>
        </li>
    )
}
export default FormCard;