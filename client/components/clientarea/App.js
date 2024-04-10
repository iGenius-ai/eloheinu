"use client"

import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import About from "@/components/home/About";
import Investment from "@/components/home/Investment";
import Luxury from "@/components/home/Luxury";
import Testimonials from "@/components/home/Testimonials";
import Featured from "@/components/others/Featured";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api, { setAuthToken } from '@/utils/api';
import Footer from "../footer/Footer";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({});
  const [listData, setListData] = useState([]);
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
          router.push('/');
        });
    }

    axios.get(`https://eh-server-u0sl.onrender.com/listings/`).then(response => {
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
      {/* <Location activeRoute="/"/> */}
      <Luxury />
      <Featured listData={listData} />
      <About />
      <Investment />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App