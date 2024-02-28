import React from 'react'


export default function SignUp() {
    
    
    return (
      <form className='z-10 w-1/2 absolute inset-0 m-auto bg-white rounded shadow'>
        <label>
            <p>First Name</p>
            <input type="text" />
        </label>
        <label>
            <p>Last Name</p>
            <input type="text" />
        </label>
        <label>
            <p>Email</p>
            <input type="email" />
        </label>
        <label>
            <p>Phone Number</p>
            <input type="tel" />
        </label>
        <button>Submit</button>
      </form>
    );
}
