import React, { useState } from 'react'
import {Link, json, useNavigate} from 'react-router-dom';
import Oauth from '../components/Oauth';
import Footer from '../components/Footer';

export default function SignUp() {
  const [formData, setformData] = useState({})
  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setformData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      setloading(true);
    const res = await fetch('/api/auth/signup', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    if (data.success === false){
      seterror(data.message);
      setloading(false);
      return;
    }
    setloading(false);
    seterror(null);
    navigate('/sign-in');
    } catch (error) {
      setloading(false);
      seterror(error.message);
    }
  };

  return (
    <div>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='border p-3 rounded-lg' onChange={handleChange}/>
        <input type="email" placeholder='Email' id='email' className='border p-3 rounded-lg' onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' className='border p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className='text-white bg-slate-700 rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>{ loading ? 'Loading..' : 'Sign up' }</button>
        <Oauth/>
      </form>
      <div className='flex gap-1 mt-4'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
    <div className='mt-44 pt-32'>
    <Footer/>

    </div>
    </div>
  )
}
