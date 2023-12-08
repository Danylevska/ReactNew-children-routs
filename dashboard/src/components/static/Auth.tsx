import React, { useContext, useState } from 'react'
import { FlexColumn } from '../shared/Flex'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { DashboardContext } from '../../contexts/DashboardContext';
import { LoginWrapper } from '../shared/loginStyle';

export const Auth = () => {
    const[formData, setFormData] = useState({email: "", password: ""});
    console.log(formData, "FormData");
const[localStorageFormData, setLocalStorageFormData] = useLocalStorage("userData");

const navigate = useNavigate();

const {setUser} = useContext(DashboardContext)!

const onSubmit = () => {



//check password and email
if(formData.email === 'admin' && formData.password === 'admin') {
  setLocalStorageFormData(formData);
  setUser(formData);
  navigate('/dashboard')

} else {
  alert ("Wrong data")
}
setFormData({email: "", password: ""})
}
 
 

  return (
    <LoginWrapper width='700px' alignItems='center' background='#07446d;' padding='60px' gap='30px' borderRadius='20px'>

      <h3 className="login-h3">Login</h3>
<input  type="text" className='login-input' placeholder='email' value={formData.email}
 onChange={(event) => setFormData({...formData, email: event.target.value}) }/>

<input  type="password" className='login-input' placeholder='password' value={formData.password}
onChange={(event) => setFormData({...formData, password: event.target.value}) }/>
<button className='login-button' onClick={onSubmit}>Submit</button>


    </LoginWrapper>

    
  )
}



