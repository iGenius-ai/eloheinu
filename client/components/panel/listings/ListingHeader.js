"use client"

import React, { useEffect, useState } from 'react'
import avatar from "@/public/images/avatar.jpg";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Rubik } from 'next/font/google'
import CreateListing from './CreateListing';
import api, { setAuthToken } from '@/utils/api';

const rubik = Rubik({ subsets: ['latin'] })

const ListingHeader = () => {
  const [user, setUser] = useState({});
  const [authToken, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Retrieve the token from localStorage or cookie
    const token = localStorage.getItem('token');

    if (token) {
      // Set the token in the request headers
      setToken(token);
      setAuthToken(token);

      // Fetch the user profile
      api.get('/profile')
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          router.push('/auth/login');
        });
    }
  }, []);

  return (
    <>
      <div 
        style={{ transition: 'margin-left .3s' }}
        className={`ml-60 h-screen relative ${rubik.className}`} id="main-content"
      >
        <header className='flex items-center justify-between py-4 px-8 h-14'>
          <div className="flex items-center">
            <i className="bx bx-menu text-2xl cursor-pointer" id="sidebar-toggle"></i>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src={avatar} alt='Brand Logo'
              width={40} height={40}
              className='rounded-full aspect-square'
            />
            <div className="user-dropdown">
              <span className="flex items-center text-sm">{user.fullName}</span>
            </div>
          </div>
        </header>

        <CreateListing user={user} authToken={authToken} />
      </div>
    </>
  )
}

export default ListingHeader