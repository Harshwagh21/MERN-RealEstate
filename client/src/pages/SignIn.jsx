import React, { useState } from 'react'
import {Link, json, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess ,signInFailure } from '../redux/user/userSlice';
import Oauth from '../components/Oauth';
import Footer from '../components/Footer';

export default function SignIn() {
  const [formData, setformData] = useState({})
  const {loading, error} = useSelector((state)=> state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    setformData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      dispatch(signInStart());
    const res = await fetch('/api/auth/signin', 
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
      dispatch(signInFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' id='email' className='border p-3 rounded-lg' onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' className='border p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className='text-white bg-slate-700 rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>{ loading ? 'Loading..' : 'Sign in' }</button>
        <Oauth/>
      </form>
      <div className='flex gap-1 mt-4'>
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
    <div className='mt-44 pt-44 sticky-bottom'>
    <Footer/>

    </div>
    </div>
  )
}
