import React from 'react';


function Form () {

    return (
        <div class="form">
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>

        <div class="input-container ic1">
          <input id="place" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="place" class="placeholder">Place</label>
        </div>

        <div class="input-container ic2">
          <input id="name" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="name" class="placeholder">Name</label>
        </div>

        <div class="input-container ic3">
          <input id="city" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="city" class="placeholder">City</label>
        </div>

        <div class="input-container ic4">
          <input id="state" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="state" class="placeholder">State</label>
        </div>

        <div class="input-container ic5">
          <input id="zip-code" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="zip-code" class="placeholder">Zip Code</label>
        </div>

        <div class="input-container ic3">
          <input id="country" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="country" class="placeholder">Country</label>
        </div>

        <div class="input-container ic2">
          <input id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
        <button type="text" class="submit">submit</button>
      </div>
      </div>
    )
}

export default Form;