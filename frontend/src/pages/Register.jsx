import React from 'react'
import {useState} from 'react'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'


function Register() {
    // create state for form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    // destructure from form data objects in state
    const {name, email, password, password2} = formData

    // create onChange event function
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // create onSubmit function for form
    const onSubmit = (e) => {
        e.preventDefault()


        if(password !== password2) {
            toast.error('Passwords do not match')
        }
    }




  return (
    <>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className='form'>
            <form onSbumit={onSubmit}>
                <div className='form-group'>
                    <input type='text' className='form-control' id='name' value={name} onChange={onChange} name='name' placeholder='Enter Your Name' required />
                </div>
                <div className='form-group'>
                    <input type='email' className='form-control' id='email' value={email} onChange={onChange} name='email' placeholder='Enter Your Email' required />
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' id='password' value={password} onChange={onChange} name='password' placeholder='Create Password' required />
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' id='password2' value={password2} onChange={onChange} name='password2' placeholder='Confirm Password' required />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register