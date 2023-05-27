import React from 'react'
import './detailform.css'
import Logo from '../img/L2.png'

function detailform() {
  return (
    <div className="detailform-body">
      <div className="details-logo">
            <img src={ Logo } alt="logo" />
            <p>CUBE</p>
      </div>
      <div className="grid-container">
        <div className="grid-container grid-item-1">
          <h1>First time? Fill the form below</h1>
        </div> 
        <div className="grid-container grid-item-2">
          <p>Student</p>
          <button>Sign-in</button>
        </div>
        <div className="grid-container grid-item-3">
          <p>Teacher</p>
          <button>Sign-in</button>
        </div>
        {/* <div className="displayform-main">
        <form>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Middle Name' />
          <input type="text" placeholder='Last Name' />
          <input type="date" placeholder='D.O.B' />
          <input type="phone" placeholder='Mobile no' />
          <input type="number" placeholder='Moodle Id' />
          <input type="email" placeholder='Email' />
 
          <label>Year</label>
            <input type="radio" id="FE" value="FE" name='Year'/>
          <label for="FE">FE</label>
            <input type="radio" id="SE" value="SE" name='Year'/>
          <label for="SE">SE</label>
            <input type="radio" id="TE" value="TE" name='Year'/>
          <label for="TE">TE</label>
            <input type="radio" id="BE" value="BE" name='Year'/>
          <label for="BE">BE</label>
          
        </form>
      </div> */}

      </div>
    </div>
  )
}

export default detailform