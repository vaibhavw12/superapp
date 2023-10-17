import React, { useState } from 'react'
import registerImage from "./image 13.png";
import './Register.css';

export const Register = () => {
  
  let [check, setCheck] = useState(false) 
  let [values,setValues] = useState({
    name : '',
    userName : '',
    email : '',
    mobile : '',
  })
  let [error,setError] = useState('')
  let [checkError,setCheckError] = useState('')

  const changeHandler = (e) =>{
    let {name,value} = e.target
    setValues({
      ...values,[name]:value
    })
  }

  const submit = (event) =>{
    event.preventDefault()
  
    // console.log(values)

    if(validation()){
      return
    }

    saveData()
    setCheckError('')
    setError('')
    setValues({
      name: '',
      userName: '',
      email: '',
      mobile: '',
    });

    
  }

  function validation(){
    if(values.name.length === 0){
      setError('Field is required')
      return true
    }else if(values.userName.length === 0){
      setError('Field is required')
      return true
    }else if(values.email.length === 0){
      setError('Field is required')
      return true
    }else if(values.mobile.length === 0){
      setError('Field is required')
      return true
    }else if(check === false){
      setCheckError('Check this box if you want to proceed')
      return true
    }
    return false
  }

  function saveData(){
    localStorage.setItem("name",values.name)
    localStorage.setItem("userName",values.userName)
    localStorage.setItem("email",values.email)
    localStorage.setItem("mobile",values.mobile)
  }

  return (
    <div>
        <div className='main'>
            <div>
                 <img className='imgRegister' src={registerImage} alt='register'></img>
                 <br></br>
                 <span className='textOnImg'>Discover new things on <br></br> Superapp</span>
            </div>
            <div className='form'>
                <span className='appName'>Super app</span>
                <p className='formTitle'>Create your new account</p>
                
                <form onSubmit={submit}>
                    <section>
                      <input className='box' type="text" name='name' value={values.name} onChange={changeHandler} placeholder='Name'></input>
                     <br></br> <span className='error'>{error}</span>
                    </section>

                    <section>
                      <input className='box' type="text" name='userName' value={values.userName} onChange={changeHandler} placeholder='UserName'></input>
                      <br></br> <span className='error'>{error}</span>
                    </section>
                  
                    <section>
                      <input className='box' type="email" name='email' value={values.email} onChange={changeHandler} placeholder='Email'></input>
                      <br></br> <span className='error'>{error}</span>
                    </section>
                    
                    <section>
                      <input className='box' type="number" name='mobile' value={values.mobile} onChange={changeHandler} placeholder='Mobile'></input>
                      <br></br> <span className='error'>{error}</span>
                    </section>
                    
                    <section>
                      <input type="checkbox" value={check} onChange={(e)=>{
                        if(check === true){
                          setCheck(false)
                        }else{
                          setCheck(true)
                        }
                      }}></input> <span className='formText'>Share my registration data with Superapp</span>
                      <br></br> <span className='error'>{checkError}</span>
                    </section>
                    <br></br>
                    <section>
                      <button className='submitBtn'>SIGN UP</button>
                    </section>
                    <section>
                      <p className='formText'>By clicking on Sign up. you agree to Superapp <span className='links'> Terms and <br></br> Conditions of Use </span></p>
                      <p className='formText'>To learn more about how Superapp collects, uses, shares and <br></br> protects your personal data please head 
                      Superapp <span className='links'> Privacy <br></br> Policy </span></p>
                    </section>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
