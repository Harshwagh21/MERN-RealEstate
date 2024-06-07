import React from 'react'
import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='border p-3 rounded-lg' />
        <input type="email" placeholder='Email' id='email' className='border p-3 rounded-lg' />
        <input type="password" placeholder='Password' id='password' className='border p-3 rounded-lg' />
        <button className='text-white bg-slate-700 rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-1 mt-4'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
