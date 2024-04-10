import React from 'react'
import site1 from "../../public/images/sites/site1.png";
import site2 from "../../public/images/sites/site2.png";
import site3 from "../../public/images/sites/site3.png";
import site4 from "../../public/images/sites/site4.png";
import site5 from "../../public/images/sites/site5.png";
import site6 from "../../public/images/sites/site6.png";
import site7 from "../../public/images/sites/site7.png";
import site8 from "../../public/images/sites/site8.png";
import site9 from "../../public/images/sites/site9.png";
import site10 from "../../public/images/sites/site10.png";
import site11 from "../../public/images/sites/site11.png";
import site12 from "../../public/images/sites/site12.png";
import site13 from "../../public/images/sites/site13.png";
import Image from 'next/image';
import Link from 'next/link';
import { Prata } from 'next/font/google'
const prata = Prata({ subsets: ['latin'] })

const MajorSites = () => {
  return (
    <>
      <section className='px-12 mt-24 pb-24 luxury max-md:px-6'>
        <div className='text-center flex flex-col items-center'>
          <h2 className={`${prata.className} text-[2rem] font-light mb-2 max-md:text-2xl`}>Major Locations On The Site</h2>
        </div>

        <div className="wrapper max-md:px-0">
        
          <div className="gallery">
              <div className="gallery__item gallery__item--1">
                  <Link href="#" className="gallery__link">
                    <Image src={site1} className='gallery__image' alt='Site Images'/>
                      <div className="gallery__overlay">
                        <span>Nigeria</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--2">
                  <Link href="#" className="gallery__link">
                      <Image src={site2} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>U.S.A</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--3">
                  <Link href="#" className="gallery__link">
                      <Image src={site3} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Argentina</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--4">
                  <Link href="#" className="gallery__link">
                      <Image src={site4} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>England</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--5">
                  <Link href="#" className="gallery__link">
                      <Image src={site5} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Dubai</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--6">
                  <Link href="#" className="gallery__link">
                      <Image src={site6} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Dublin</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--7">
                  <Link href="#" className="gallery__link">
                      <Image src={site7} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Japan</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--8">
                  <Link href="#" className="gallery__link">
                      <Image src={site8} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Maldives</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--9">
                  <Link href="#" className="gallery__link">
                      <Image src={site9} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Brazil</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--10">
                  <Link href="#" className="gallery__link">
                      <Image src={site10} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Texas</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--11">
                  <Link href="#" className="gallery__link">
                      <Image src={site11} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Canada</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--12">
                  <Link href="#" className="gallery__link">
                      <Image src={site12} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Tokyo</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
              <div className="gallery__item gallery__item--13">
                  <Link href="#" className="gallery__link">
                      <Image src={site13} className='gallery__image' alt='Site Images' />
                      <div className="gallery__overlay">
                        <span>Switzerland</span>
                        <p className='text-sm font-normal'>10+ Properties</p>
                      </div>
                  </Link>
              </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default MajorSites
