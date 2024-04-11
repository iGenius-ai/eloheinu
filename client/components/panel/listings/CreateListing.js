"use client"

import React, { useEffect, useState } from 'react'
import { Rubik } from 'next/font/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const rubik = Rubik({ subsets: ['latin'] })

const CreateListing = ({ user, authToken }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState([]); // Array to store selected images
  const [imgsSrc, setImgsSrc] = useState([]);
  const [property, setProperty] = useState({
    propertyName: '',
    tags: [],
    price: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    lenght: '',
    width: '',
    propertyType: '',
    status: '',
    features: [],
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
  
    if (name === 'tags') {
      const selectedTags = Array.from(e.target.selectedOptions, option => option.value);
      setProperty({ ...property, [name]: selectedTags });
    } else if (name === 'features') {
      const featuresArray = value.split(',').map(item => item.trim(' '));
      setProperty({ ...property, features: featuresArray });
    } else if (name === 'price') {
      const formattedPrice = value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setProperty({ ...property, [name]: formattedPrice });
    } else if (name === 'image') {
      // Handle image selection (improved approach)
      const fileList = e.target.files;
      const images = [];
      const imageURLs = []; // For displaying previews (optional)
      const base64Images = []; // To store base64 encoded images
  
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        images.push(file);
  
        // Convert image to base64
        const base64 = await convertToBase64(file);
        base64Images.push(base64);
  
        // Optional: Display image previews (requires server-side rendering)
        if (window.URL && window.URL.createObjectURL) {
          imageURLs.push(window.URL.createObjectURL(file));
        }
      }
  
      setImage(images);
      setImgsSrc(imageURLs);
  
      // Update property with base64 images
      setProperty({ ...property, images: base64Images });
    } else {
      setProperty({ ...property, [name]: value });
    }
  };
  
  // Function to convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('propertyName', property.propertyName);
    formData.append('tags', JSON.stringify(property.tags)); // Convert array to string
    formData.append('price', property.price);
    formData.append('address', property.address);
    formData.append('bedrooms', property.bedrooms);
    formData.append('bathrooms', property.bathrooms);
    formData.append('lenght', property.lenght); 
    formData.append('width', property.width);
    formData.append('propertyType', property.propertyType);
    formData.append('status', property.status);
    formData.append('features', JSON.stringify(property.features)); 

    for (let i = 0; i < image.length; i++) {
      formData.append('images', image[i]);
    }

    const response = axios.post(
      'https://elh-server.onrender.com/listings/create',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`
        },
      }
    );
  
    toast.promise(
      response,
      {
        loading: 'Creating your list...',
        success: async (res) => {
          try {
            router.push('/dashboard');
            return res.data.message;
          } catch (err) {
            console.error(err); // Log the actual error for debugging
            return 'An error occurred while creating the listing.';
          }
        },
        error: (err) => {
          console.error(err); // Log the actual error for debugging
          if (err.response && err.response.data && err.response.data.message) {
            setIsLoading(false)
            return err.response.data.message;
          } else {
            setIsLoading(false)
            return 'An error occurred while handling the submission';
          }
        },
      },
      {
        style: {
          fontSize: '14px',
        },
        position: 'top-center',
        duration: 4000,
      }
    );
    
  }

  return (
    <>
      <div className="p-8 m-8 rounded-md bg-gray-50 text-gray-600" id="user-card-main">
        <h3 className='font-semibold text-gray-700'>List a new property</h3>

        <form onSubmit={handleSubmit} encType='multipart/form-data' className="space-y-4 flex items-center flex-wrap mt-2 gap-4">
          <div className='block w-full'>
            <label htmlFor="propertyName" className="block font-medium text-[14px]">Property Name</label>
            <input 
              type="text" id="propertyName" name="propertyName" value={property.propertyName} onChange={handleChange} 
              placeholder="Name of the property"
              className="transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
            />
          </div>
          <div className='w-full'>
            <label htmlFor="address" className="block font-medium text-[14px]">Address</label>
            <textarea 
              id="address" name="address" value={property.address} onChange={handleChange} 
              className="resize-none transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
              placeholder='Enter property address'
            >
            </textarea>
          </div>
          <div className='w-full flex items-center gap-x-4'>
            <div className='w-full'>
              <label htmlFor="bedrooms" className="block font-medium text-[14px]">No. of Bedrooms</label>
              <input 
                type="number" id="bedrooms" name="bedrooms" value={property.bedrooms} onChange={handleChange} 
                placeholder="Number of Bedrooms"
                className="transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
              />
            </div>
            <div className='w-full'>
              <label htmlFor="bathrooms" className="block font-medium text-[14px]">No. of Bathrooms</label>
              <input 
                type="number" id="bathrooms" name="bathrooms" value={property.bathrooms} onChange={handleChange} 
                placeholder="Number of Bathrooms"
                className="transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
              />
            </div>
          </div>
          <div className='w-full flex flex-wrap items-center gap-x-4'>
            <div className='flex items-center gap-x-4'>
              <div className='w-full'>
                <label htmlFor="lenght" className="block font-medium text-[14px]">Length</label>
                <input 
                  type="text" id="lenght" name="lenght" value={property.lenght} onChange={handleChange} 
                  placeholder=""
                  className="transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
                />
              </div>
              <div className='w-full'>
                <label htmlFor="width" className="block font-medium text-[14px]">Width</label>
                <input 
                  type="text" id="width" name="width" value={property.width} onChange={handleChange} 
                  placeholder=""
                  className="transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
                />
              </div>
            </div>
            <div className='w-full'>
              <label htmlFor="status" className="block font-medium text-[14px]">Status</label>
              <input 
                type="text" id="status" name="status" value={property.status} onChange={handleChange} 
                placeholder="For Sale?"
                className="transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
              />
            </div>
            <div className='w-full'>
              <label htmlFor="price" className="block font-medium text-[14px]">Price</label>
              <input 
                type="text" id="price" name="price" value={property.price} onChange={handleChange} 
                placeholder="NGN 57,000,000"
                className="transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
              />
            </div>
          </div>
          <div className='w-full flex flex-wrap items-start gap-x-4'>
            <div className='w-full'>
              <label htmlFor="tag" className="block font-medium text-[14px]">Tag</label>
              <select multiple
                type="text" id="tag" name="tags" value={property.tags} onChange={handleChange} 
                placeholder="Hot Deals"
                className={`${rubik.className} transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]`} 
              >
                <option className={`${rubik.className}`}>-- select tags --</option>
                <option value="featured" className={`${rubik.className}`}> Featured </option>
                <option value="for sale" className={`${rubik.className}`}> For Sale </option>
                <option value="hot offer" className={`${rubik.className}`}> Hot Offer </option>
              </select>
            </div>
            <div className='w-full'>
              <label htmlFor="propertyType" className="block font-medium text-[14px]">Property Type</label>
              <input 
                type="text" id="propertyType" name="propertyType" value={property.propertyType} onChange={handleChange} 
                placeholder="Fully Detached Duplex"
                className="transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="image" className="block font-medium text-[14px]">
              Images (select multiple)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
            />
          </div>
          {imgsSrc.length > 0 && (
            <div className="mb-4">
              <ul className="flex items-center gap-4">
                {imgsSrc.map((url) => (
                  <li key={url}>
                    <img src={url} alt="Selected image preview" className="w-full h-full object-cover rounded" />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className='w-full'>
            <label htmlFor="features" className="block font-medium text-[14px]">Features</label>
            <textarea 
              id="features" name="features" value={property.features.join(', ')} onChange={handleChange} 
              className="resize-none transition-all duration-300 ease-in-out w-full border border-gray-300 rounded p-2 text-gray-800 outline-none focus:border-purple-800 text-[14px]" 
              placeholder='List property features...'
            >
            </textarea>
          </div>
          <div>
            <button type='submit'
              onClick={handleSubmit} disabled={isLoading}
              className="bg-purple-900 flex items-center gap-1 transition-all duration-300 ease-in-out text-[14px] text-white px-4 py-2 rounded hover:bg-purple-950 hover:font-medium"
            >
                <i className={`${isLoading ? 'bx bx-loader-alt bx-spin' : 'hidden'} `}></i><span>{isLoading ? 'Listing property...' : 'List Property?'}</span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateListing