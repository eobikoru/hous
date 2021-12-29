import { useState, React } from 'react';
import {Link} from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
function SignIn() {

    const [ showPassword , setShowPassword] = useState(false)
    const [ formData , setFormData] = useState({
        email:"",
        password:""
    });
const onChange =(e)=>{
    setFormData((prevState)=>({
       ...prevState ,
       [e.target.id] :e.target.value
    }))
}

    const {email, password} = formData;
    return (
        <>
           <div className='pageContainer'>
              <header>
                  <p className='pageHeader'>
                      welcome back emeka daniel
                  </p>
              </header> 

              <form>
                 
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
               <div className='signInBar'>
                 <p className='signInText'>
                   Sign In
                 </p>
                 <button className='signInButton'>
                   <BsFillArrowRightCircleFill width='34px' height='34px'/>
                 </button>
               </div>

              </form>

            <Link to="/signup" className='registerLink'>
                Sign Up Instead
            </Link>

           </div>
        </>
    )
}

export default SignIn
