import React from 'react'
import {useState} from 'react'
import {toast} from 'react-toastify'
import {FaSignInAlt} from 'react-icons/fa'


function Login() {
    // create state for form
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    // destructure from form data objects in state
    const {email, password} = formData

    // create onChange event function
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // create onSubmit function for form and check if password and password2 equal each other
    const onSubmit = (e) => {
        e.preventDefault()


     
    }




  return (
    <>
        <section className='heading'>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Please login to get support</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type='email' className='form-control' id='email' value={email} onChange={onChange} name='email' placeholder='Enter Your Email' required />
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' id='password' value={password} onChange={onChange} name='password' placeholder='Enter Password' required />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login