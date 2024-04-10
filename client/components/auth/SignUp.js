"use client";

import React, { useEffect, useState } from 'react'
import google from "../../public/images/google.png";
import Image from 'next/image'
import toast from "react-hot-toast";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
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
  
    const request = axios.post('https://elh-server.onrender.com/auth/register', formData);
  
    toast.promise(
      request,
      {
        loading: 'Creating your account...',
        success: (res) => {
          setIsLoading(false);
          router.push('/auth/signin');
          return res.data.message;
        },
        error: (err) => {
          setIsLoading(false);
          if (err.response && err.response.status === 409) {
            return err.response.data.message;
          } else {
            return 'An error occurred';
          }
        },
      }, {
        style: {
          fontSize: '14px',
        },
        position: 'top-center',
      }
    );
  }

  return (
    <>
      <section className='flex justify-center text-left p-4 pt-24'>
        <div className='flex flex-col min-h-96 gap-4 max-w-[35rem] p-4'>
          <h1 
            className='uppercase text-3xl font-bold'
            style={{ background: "linear-gradient(to top, #bca4ce, #4197e7)", color: "transparent", WebkitBackgroundClip: "text" }}
          >Sign up</h1>

          <p>Let's get you started right away!</p>
          <button 
            className='flex items-center gap-1 px-4 py-2 w-fit rounded-md google-auth transition-all duration-300 ease-in-out' 
            style={{ background: "#db44393a" }}
          >
            <Image
              src={google} alt='Brand Logo'
              width={20} height={20}
            />
            Sign up with Google
          </button>
          <div className='flex text-2xl'>OR</div>

          <form className='w-full' onSubmit={handleSubmit}>
            <div className='flex items-center gap-4'>
              <div className='mb-4'>
                <label>Full Name:</label>
                <input 
                  className='border mt-1 w-full border-gray-400 rounded-md bg-transparent p-2'
                  value={formData.fullName} onChange={handleInput}
                  name='fullName'
                  type='text' placeholder='John Doe' 
                  />
              </div>
              <div className='mb-4'>
                <label>Contact:</label>
                <input 
                  className='border mt-1 w-full border-gray-400 rounded-md bg-transparent p-2'
                  value={formData.contact} onChange={handleInput}
                  name='contact'
                  type='text' placeholder='Phone Number' 
                />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='mb-4'>
                <label>Email Address:</label>
                <input 
                  className='border mt-1 w-full border-gray-400 rounded-md bg-transparent p-2'
                  value={formData.email} onChange={handleInput}
                  name='email'
                  type='email' placeholder='someone@example.com' 
                  />
              </div>
              <div className='mb-4 relative'>
                <label>Password:</label>
                <input 
                  className='border mt-1 w-full border-gray-400 rounded-md bg-transparent p-2'
                  value={formData.password} onChange={handleInput}
                  name='password'
                  type={showPassword ? 'text' : 'password'} placeholder='**********' 
                />
                <i className='bx bxs-show absolute top-2/3 right-2 -translate-y-1/2 cursor-pointer' onClick={toggleShowPassword}></i>
              </div>
            </div>
            <button 
              disabled={isLoading}
              className={`${isLoading ? 'disabled:opacity-70 bg-gray-400 border-gray-400 pointer-events-none cursor-not-allowed' : ''} px-6 py-2 hover:bg-gray-300 hover:border-gray-300 transition-all duration-300 ease-in-out border border-gray-400 rounded-md`}
            >
              {isLoading ? 'Signing you up...' : 'Create Account'}
            </button>

            <p className='my-2'>Already registered? <a className='border-b-4 border-gray-400' href='/auth/signin'>Sign In</a> here</p>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp