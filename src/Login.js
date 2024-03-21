import React from 'react'

import{useRef,useState,useEffect} from 'react'


const Login = () => {

    const userRef=useRef();
    const errRef=useRef();

    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);


    useEffect(()=>{
        userRef.current.focus();

    },[]);

    useEffect(()=>{
        setErrMsg('');


    },[user,pwd]);

  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>

      <h1>Sign in</h1>
      <form>
        <label htmlFor='username'>Username:</label>
        
      </form>
      
    </section>
  )
}

export default Login
