import React from 'react'

import{useRef,useState,useEffect ,useContext} from 'react'

import AuthContext from "./context/AuthProvider"

import axios from './api/axios';

const LOGIN_URL='/auth';

import MainPage from './MainPage'


const Login = () => {

  const{ setAuth }=useContext(AuthContext)

    const userRef=useRef();
    const errRef=useRef();

    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);
    console.log(pwd);



    useEffect(()=>{
        userRef.current.focus();

    },[]);

    useEffect(()=>{
        setErrMsg('');


    },[user,pwd])



      const handleSubmit = async (e) => {


        e.preventDefault();

try{
  const response=await axios.post(LOGIN_URL,JSON.stringify({user:user,pwd:pwd}),{
    headers: {'Content-Type': 'application/json',
    withCredentials: true
  
  },

  });

  console.log(JSON.stringify(response?.data));
  // console.log(JSON.stringify(response));
  const accessToken=response?.data?.accessToken;
  const roles=response?.data?.roles
  setAuth({user,pwd,roles,accessToken})
  setUser('');
  setPwd("");
  setSuccess(true);


}catch(err){
  if(!err?.message){
    setErrMsg('No Server Response');

  }else if(err.response?.status===400){
    setErrMsg('Missing UserName and password');
  }else if(err.response?.status===401){
    setErrMsg('Unauthorized');
  }else{
    setErrMsg('Login Failed');


  }
  errRef.current.focus();

}



      }


    


    

  return (
    <>

    {success?(
      <section>
        <MainPage/>
      </section>
    ):(
    
    
    <section>
      <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>

      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label className='color' htmlFor='username'>Username:</label>
        <input
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e)=>setUser(e.target.value)}
        value={user}
        required
        
        />
        <label className='color' htmlFor='username'>Password:</label>
        <input
        type="password"
        id="password"
        ref={userRef}
        onChange={(e)=>setPwd(e.target.value)}
        value={pwd}
        required
        
        />
        <button className='button'>Sign In</button>

      </form>
      <p>
        Need an Account?<br/>
        <span className='line'>
          {}
          <a href="github.com">Sign Up</a>
        </span>
      </p>
      
    </section>




  )
}
</>
  )
}

export default Login;
