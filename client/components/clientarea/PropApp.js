"use client"

import PropNavbar from '@/components/property/PropNavbar'
import PropertyDetails from '@/components/property/PropertyDetails'
import PropertyHead from '@/components/property/PropertyHead'
import PropertyImages from '@/components/property/PropertyImages'
import { useEffect, useState } from "react";
import Footer from '../footer/Footer'
import axios from 'axios'
import { useParams } from 'next/navigation'

const PropApp = () => {
  const { _id } = useParams();
  const [listData, setListData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios.get(`https://eh-server-u0sl.onrender.com/listings/list/${_id}`).then(response => {
      const list = response.data.data;
      setListData(list);
      setIsLoading(false); // Set loading to false after data is fetched
    }).catch(error => {
      console.error('Error:', error);
      setIsLoading(false); // Set loading to false on error
    });
  }, []);

  return (
    <>
      <PropNavbar/>
      {!isLoading && <PropertyHead listData={listData} />}
      {!isLoading && <PropertyImages listData={listData} />}
      {!isLoading && <PropertyDetails listData={listData} />}
      <Footer />
    </>
  )
}

export default PropApp