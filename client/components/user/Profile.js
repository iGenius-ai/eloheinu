"use client";

import api, { setAuthToken } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import Content from '../panel/Content';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    // Retrieve the token from localStorage or cookie
    const token = localStorage.getItem('token');

    if (token) {
      // Set the token in the request headers
      setAuthToken(token);

      // Fetch the user profile
      api.get('/profile')
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          router.push('/auth/signin');
        });
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Content user={user} />
    </>
  );
};

export default Profile;