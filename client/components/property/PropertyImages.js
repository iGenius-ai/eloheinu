import Image from 'next/image'
import React, { useState } from 'react'

const PropertyImages = ({ listData }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <section className='p-12 pb-4 flex items-center justify-center w-full max-lg:px-6'>
        <div className={`max-w-[1120px] aspect-square`}>
          {selectedImage && (
            <Image src={selectedImage} width={1080} height={810} alt="Selected Image" className={`aspect-square rounded-md`} />
          )}
        </div>
        <div className='w-full flex flex-wrap gap-1 px-2'>
          {listData.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              width={272}
              height={272}
              className='aspect-square rounded-md cursor-pointer'
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default PropertyImages;