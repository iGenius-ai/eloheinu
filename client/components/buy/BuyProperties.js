import React, { useEffect, useState } from 'react'
import Featured from '../buy/Featured'
import Types from './Types'
import axios from 'axios';

const BuyProperties = () => {
  const [listData, setListData] = useState([]);
  const [featured, setFeatured] = useState({});
  const [totalListings, setTotalListings] = useState(0);

  useEffect(() => {
    axios.get('https://elh-server.onrender.com/listings/').then(response => {
      const list = response.data.lists;
      setListData(list);
      setTotalListings(list.length);
      const latest = list.sort((a, b) => new Date(b.date) - new Date(a.date));
      setFeatured(latest[0]);
    }).catch(error => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <>
      <section className='px-12 mt-24 pb-24 luxury flex gap-8'>
        <Featured listData={listData} />
        <Types featured={featured} totalListings={totalListings} />
      </section>
    </>
  )
}

export default BuyProperties