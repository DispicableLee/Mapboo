import React from 'react';

function FormCard({ id, name, street, city, state, zip, country, comment}){
    return (
        <li className="card">
        <div className="details">
          <div className="avatar">
<span class="material-symbols-outlined">person</span>
          </div>
          <h1>{name}</h1>
          <div className="location">{city}, {state}</div>
          <h4>{comment}</h4>
        </div>
        </li>
    )
}
export default FormCard;