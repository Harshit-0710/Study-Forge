import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { resetPassword } from '../services/operations/authAPI';
import { useLocation } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa";

import { Link } from 'react-router-dom';

import { FaEye } from "react-icons/fa";
const UpdatePassword = () => {
    const dispatch=useDispatch();
    const [showPassword,setShowPassword]=useState(false);
    // const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const location= useLocation();
    const {loading}=useSelector((state)=>state.auth);
    const [formData,setFormData]= useState({
        password:"",
        confirmPassword:"",
    })

    const {password,confirmPassword}=formData

    const handleOnChange=(e)=>{
        setFormData((prevData)=>({
           ...prevData,
            [e.target.name]:e.target.value
        }
        ))
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const token= location.pathname.split('/').at(-1);
       dispatch(resetPassword(password,confirmPassword,token));
    }

  return (
    <div className='text-white'>
      {
        loading?(
            <div>
                Loading...
            </div>
            ):(
                <div>
                    <h1>Choose new Password</h1>
                    <p>Almost done,Enter your password and you are all ser</p>
                    <form onSubmit={handleOnSubmit}>
                     <label>
                        <p>New Password</p>
                        <input
                            required
                            type={showPassword?"text":"password"}
                            name='password'
                            value={password}
                            onChange={handleOnChange}
                            placeholder='new password'
                            className='text-black'
                        /> 
                        <span onClick={()=>setShowPassword((prev)=>!prev)}>
                           {
                            showPassword?<FaRegEyeSlash fontSize={24}/>:<FaEye fontSize={24} />
                           } 
                        </span>
                     </label>
                     {/* label 2 for confirmpassword */}
                     <label>
                        <p>Confirm Password</p>
                        <input
                            required
                            type={showConfirmPassword?"text":"password"}
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleOnChange}
                            placeholder='ConfirmPassword'
                            className='text-black '
                        /> 
                        <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                           {
                            showConfirmPassword?<FaRegEyeSlash fontSize={24}/>:<FaEye fontSize={24} />
                           } 
                        </span>
                     </label>

                     <button type='submit'>
                        Reset Password
                     </button>
                    </form>
                   <div>
                    <Link to='/login'>
                        <p>Back to login</p>
                    </Link>
                   </div>

                </div>
                )
      }
    </div>
  )
}

export default UpdatePassword