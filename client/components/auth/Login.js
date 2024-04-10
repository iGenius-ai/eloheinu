"use client";

import React, { useState } from 'react'
import google from "../../public/images/google.png";
import Image from 'next/image'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const router = useRouter();

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const toggleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const request = axios.post('https://eh-server-u0sl.onrender.com/auth/signin', formData);
  
    toast.promise(
      request,
      {
        loading: 'Logging you in...',
        success: (res) => {
          const { token } = res.data;
          localStorage.setItem('token', token);
          console.log("User:", res);
          setIsLoading(false);
          router.push('/dashboard');
          return res.data.message;
        },
        error: (err) => {
          setIsLoading(false);
          if (err.response && err.response.data && err.response.data.message) {
            return err.response.data.message;
          } else {
            return 'An error occurred here';
          }
        },
      }, {
        style: {
          fontSize: '14px',
        },
        position: 'top-center',
        duration: 4000
      }
    );
  }

  return (
    <>
      <section className='flex justify-center text-left p-4 pt-24'>
        <div className='flex flex-col min-h-96 gap-4 w-96 p-4'>
          <h1 
            className='uppercase text-3xl font-bold'
            style={{ background: "linear-gradient(to top, #bca4ce, #4197e7)", color: "transparent", WebkitBackgroundClip: "text" }}
          >Sign in</h1>

          <p>Hey there. Welcome back!</p>
          <button 
            className='flex items-center gap-1 px-4 py-2 w-fit rounded-md google-auth transition-all duration-300 ease-in-out' 
            style={{ background: "#db44393a" }}
          >
            <Image
              src={google} alt='Brand Logo'
              width={20} height={20}
            />
            Sign in with Google
          </button>
          <div className='flex text-2xl'>OR</div>

          <form className='w-full' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label>Email Address:</label>
              <input 
                className='border mt-1 w-full border-gray-400 rounded-md bg-transparent p-2'
                value={formData.email} onChange={handleInput}
                name='email'
                type='email' placeholder='someone@example.com' 
                />
            </div>
            <div className='mb-6 relative'>
              <label>Password:</label>
              <input 
                className='border mt-1 w-full border-gray-400 rounded-md bg-transparent p-2'
                value={formData.password} onChange={handleInput}
                name='password'
                type={showPassword ? 'text' : 'password'} placeholder='**********' 
              />
              <i className={`absolute top-2/3 right-2 -translate-y-1/2 cursor-pointer bx ${showPassword ? 'bxs-hide' : 'bxs-show'}`} onClick={toggleShowPassword}></i>
            </div>
            <button 
              disabled={isLoading}
              className='px-6 py-2 hover:bg-gray-300 hover:border-gray-300 transition-all duration-300 ease-in-out border border-gray-400 rounded-md'
            >
              {isLoading ? 'Logging you in...' : 'Sign In'}
            </button>

            <p className='my-2'>Don't have an account? <a className='border-b-4 border-gray-400' href='/auth/register'>Sign Up</a> here</p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login