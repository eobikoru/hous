import { useState, React } from 'react';
import {Link} from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

function SignUp() {

    const [ showPassword , setShowPassword] = useState(false)
    const [ formData , setFormData] = useState({
       name:'',
        email:"",
        password:""
    });
const onChange =(e)=>{
    setFormData((prevState)=>({
       ...prevState ,
       [e.target.id] :e.target.value
    }))
}

    const {name,email, password} = formData;
    return (
        <>
           <div className='pageContainer'>
              <header>
                  <p className='pageHeader'>
                      welcome back 
                  </p>
              </header> 

              <form>
                 
                 
              <input type='text' className='nameInput' placeholder='Name' id='name' value={name} onChange={onChange}/>

                  <input type='email' className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange}/>
              
              <div className='passwordInputDiv'>
                 <input type={showPassword ? 'text' : 'password'}  className='passwordInput' placeholder='Password' id="password" value={password} onChange={onChange}/>
             
                <img src={visibilityIcon} alt='show password' className="showPassword"
                onClick={() => setShowPassword((prevState) =>
                    !prevState
                    )}
                />
              </div>
              <Link to='/forgotPassword' className='forgotPasswordLink'>
                  Forgot Password
              </Link>
               <div className='signUpBar'>
                 <p className='signUpText'>
                   Sign Up
                 </p>
                 <button className='signUpButton'>
                   <BsFillArrowRightCircleFill width='34px' height='34px'/>
                 </button>
               </div>

              </form>

            <Link to="/signin" className='registerLink'>
                Sign In Instead
            </Link>

           </div>
        </>
    )
}

export default SignUp
