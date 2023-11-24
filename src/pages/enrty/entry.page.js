import React, { useState } from 'react'
import './entry.style.css'
import Login from '../../components/login/Login/login.comp'
import PasswordReset from '../../components/password-reset/passwordReset.comp'


const Entry = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword] = useState("")
  const [formLoad,setFormLoad]=useState("login")
  const  handleOnChange = (e)=>{
    const {name,value}=e.target
    console.log(name,value)
    switch(name)
    {
      case 'email':
        setEmail(value)
        break 
        case 'password':
          setPassword(value)
        break

        default:
          break
    }
  }
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    if(!email || !password )
    {
     return alert("Fill up all the Form!")
    }
      console.log(email,password)
  }


  const formSwitcher = formType=>{
      setFormLoad(formType)
  }

  const handleOnResetSubmit =(e)=>{
      e.preventDefault();
    if(!email)
    {
     return alert("Fill enter the email")
    }
      console.log(email)
  }
  return (

    <div className='entry-page bg-inf o'>
     <div class="mt-4 p-5 bg-white text-dark rounded form-box" >
          
          {formLoad==="login" && <Login handleOnChange={handleOnChange}
           handleOnSubmit={handleOnSubmit}
           formSwitcher={formSwitcher}
           email={email}
           pass={password}
           />
          }

          {formLoad ==="reset" && <PasswordReset handleOnChange={handleOnChange}
           handleOnResetSubmit={handleOnResetSubmit}
           formSwitcher={formSwitcher}
           email={email}
           />
          }
         
          
       
  </div>
    </div> 

  )

}

export default Entry
