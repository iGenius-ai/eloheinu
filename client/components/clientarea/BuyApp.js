"use client"

import Location from '@/components/Location'
import Navbar from '@/components/Navbar'
import BuyProperties from '@/components/buy/BuyProperties'
import Hero from '@/components/buy/Hero'
import { useRouter } from 'next/navigation';
import api, { setAuthToken } from '@/utils/api';
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import axios from 'axios'

const BuyApp = () => {
  const [user, setUser] = useState({});
  const [listData, setListData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('https://elh-server.onrender.com/listings/').then(response => {
      const list = response.data.lists;
      setListData(list);
    }).catch(error => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <>
      <Navbar user={user}/>
      <Hero />
      <BuyProperties />
      <Footer />
    </>
  )
}

export default BuyApp