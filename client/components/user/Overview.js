import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

const Overview = ({ user }) => {
  const [listData, setListData] = useState([]);
  const [authToken, setToken] = useState("");
  const [image, setImage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const preset = 'ml_default';

  const onChange = e => {
    setImage(e.target.files[0]);
  };

  const limit = 10;
  const skip = (currentPage - 1) * limit;

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token)

    if (!token) {
      router.push('/auth/signin');
    }

    axios.get(`https://eh-server-u0sl.onrender.com/listings/?limit=${limit}&skip=${skip}`).then(response => {
      const list = response.data.lists;
      setListData(list);
    }).catch(error => {
      console.error('Error:', error);
    });
  }, [currentPage]);

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset);
    try {
      const res = await axios.post('http://localhost:5000/listings/upload', formData);
      const imageUrl = res.data.secure_url;

      console.log(res, imageUrl);
      const image = await axios.post('http://localhost:5000/listings/upload', {
        imageUrl
      });
      setImage(image.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (list) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${list.propertyName}?`);

    if (confirmDelete) {
      const request = axios.get(`http://localhost:5000/listing/list/delete/${list._id}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    
      toast.promise(
        request,
        {
          loading: `Deleting ${list.listName}...`,
          success: (res) => {
            router.push('/dashboard')
            return res.data.message;
          },
          error: (err) => {
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
  }

  return (
    <>
      <div className="p-8 m-8 rounded-md bg-gray-50 text-gray-600" id="user-card-main">
        <h3>Welcome, {user.fullName}</h3>

        <div className="flex items-center flex-wrap mt-2 gap-4">
          <a href="/dashboard/create_listing/" className="bg-gray-200 hover:bg-gray-300 text-sm py-2 px-3 rounded-md transition-all ease-in-out duration-300 flex items-center gap-1">
            <i className='bx bxs-file-plus'></i><span>Create New Listing</span>
          </a>
        </div>
      </div>

      <div className="flex justify-between items-start my-0 mx-8 gap-4">
        <div className="p-8 py-6 rounded-md w-full bg-gray-50">
          <h3 className='text-lg font-semibold text-gray-700'>View Listings</h3>

          <ul className='mt-2'>
            {listData && listData.length > 0 ? (
              listData.slice((currentPage - 1) * limit, currentPage * limit).map(list => (
                <li key={list._id} className='flex text-[14px] items-center justify-between'>
                  <Link href={`/integration/${list._id}`}>
                    {list.propertyName}
                  </Link>
                  <div className="flex items-center gap-2">
                    <Link href={`/lists/train/${list._id}`} className="text-white flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-green-600"><i className='bx bxs-edit-alt'></i> <span>Edit</span></Link>
                    <button onClick={() => handleSubmit(list)} className="text-white flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-red-600"><i className='bx bxs-message-square-x'></i> <span>Delete</span></button>
                  </div>
                </li>
              ))
            ) : (
              <p className='text-gray-500 text-[14px]'>You have no listings yet...</p>
            )}
          </ul>

          <div className="flex justify-center mt-4">
            {currentPage > 1 && (
              <button onClick={() => setCurrentPage(currentPage - 1)} className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition-all duration-300 ease-in-out text-sm">
                <i className='bx bx-chevron-left'></i>
              </button>
            )}
            {Math.ceil(listData.length / limit) > currentPage && (
              <button onClick={() => setCurrentPage(currentPage + 1)} className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition-all duration-300 ease-in-out text-sm">Next</button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview