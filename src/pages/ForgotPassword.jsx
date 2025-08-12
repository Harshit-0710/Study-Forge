import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getPasswordResetToken } from '../services/operations/authAPI';
const ForgotPassword = () => {
     const dispatch=useDispatch(); 

    const {loading}=useSelector((state)=>state.auth);
   const [emailSent,setEmailSent]=useState(false);
   const [email,setEmail]=useState("");  
   const handleOnSubmit=(e)=>{
    e.preventDefault();
    dispatch(getPasswordResetToken(email,setEmailSent))
   }
  return (
    <div className='text-white flex  justify-center items-center'>
        {
          loading? (
            <div>Loading..</div>
          ):(<div>
              <h1>
                {
                 !emailSent ? "Reset your Password "  :"Check your email" 
                }
              </h1>

              <p>
                {
                       !emailSent ? "Have no fear .we will email you instructions to reset your password .If you dont have access to your email we can try accoun recovery":`we have sent you password reset email to ${email}`
                }

                <form onSubmit={handleOnSubmit}>
                    {
                        !emailSent && (
                            <label>
                                <p>email Address</p>
                                <input
                                    className='text-black'
                                    required
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="enter your email Addres"
                                />
                            </label>
                        )
                    }
                    <button 
                    type='submit'>
                        {
                          !emailSent ? "Reset Password":"Reset Email"  
                        }
                    </button>
                </form>
                <div>
                    <Link to="/login">
                        <p>Back to Ligin</p>
                    </Link>
                </div>
              </p>
          </div>)
        }
    </div>
  )
}

export default ForgotPassword