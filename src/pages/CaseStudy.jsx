import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import pigeonhire from '../assets/pigeonhire.png';
import pigeonpricing from '../assets/pigeonpricing.png';
import pigeonfaq from '../assets/pigeonfaq.png';
import './Home.css';
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { BsToggle2Off,BsToggle2On, BsMoon,BsSun} from "react-icons/bs";

const CaseStudy = () => {
  const [frame1, setFrame1] = useState(true);
  const [frame2, setFrame2] = useState(false);
  const [frame3, setFrame3] = useState(false);
  const [loading, setLoading] = useState({
    main: true,
    thumb1: true,
    thumb2: true,
    thumb3: true
  });
  const [isdark, setIsDark] = useState(true);

  const handleIsDark = () => {
    setIsDark(prev => !prev)
  }

  const navigate = useNavigate()

  const handleImageLoad = (imageKey) => {
    setLoading(prev => ({
      ...prev,
      [imageKey]: false
    }));
  };

  const handleFrame1 = () => {
    setLoading(prev => ({ ...prev, main: true }));
    setFrame1(true);
    setFrame2(false);
    setFrame3(false);
  };

  const handleFrame2 = () => {
    setLoading(prev => ({ ...prev, main: true }));
    setFrame2(true);
    setFrame1(false);
    setFrame3(false);
  };

  const handleFrame3 = () => {
    setLoading(prev => ({ ...prev, main: true }));
    setFrame3(true);
    setFrame1(false);
    setFrame2(false);
  };

  const ImageWithSkeleton = ({ src, alt, className, onLoad, loadingKey }) => (
    <div className="relative">
      <div 
        className={`absolute inset-0 image-skeleton rounded-lg ${
          loading[loadingKey] ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
      />
      <img 
        src={src}
        alt={alt}
        className={`${className} ${
          loading[loadingKey] ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        onLoad={() => onLoad(loadingKey)}
        loading="lazy"
      />
    </div>
  );

  return (
    <div className={` ${isdark ? 'bg-black' : 'bg-white'} overflow-y-auto h-screen`}>
      <Navbar />

      <div className='px-6 md:px-64'>

      <div className='flex justify-center items-center  gap-x-4'>{isdark ? <div onClick={handleIsDark}><BsToggle2Off color='gray' size={35} /></div> : <div onClick={handleIsDark}><BsToggle2On color='gray' size={35} /></div>}  {isdark ? <BsSun size={20} color='white'/> : <BsMoon size={20}/>}</div> 
      <div onClick={() => navigate(-1)} className='flex gap-x-3 items-center  rounded-2xl px-3 py-1 w-[200px] cursor-pointer text-gray-400 mt-2'><button className='bg-black px-2 py-2 rounded-full'><GoArrowLeft size={25} color='white'/></button>Go Back</div> 

      <p className="slide-from-top text-sm md:text-base mt-[60px] text-gray-400">WEB APPLICATION</p>
        <p className={`font-bold text-3xl md:text-4xl lg:text-5xl pt-4 slide-from-left leading-tight layout-transition ${isdark ? 'text-white' : 'text-black'}`}>
          Business directory to secure partnerships in Communities
        </p>

        <div className="flex flex-col md:flex-row md:justify-center gap-y-8 md:gap-x-12 lg:gap-x-32 pt-9 md:pt-16 slide-from-right layout-transition">
          <div className="text-center md:text-left layout-transition">
            <p className="text-lg md:text-xl text-gray-400">COMPANY</p>
            <p className={`font-bold text-xl md:text-2xl ${isdark ? 'text-white' : 'text-black'}`}>Pigeonhire</p>
          </div>

          <div className="text-center md:text-left layout-transition">
            <p className="text-lg md:text-xl text-gray-400">ROLE</p>
            <p className={`font-bold text-xl md:text-2xl ${isdark ? 'text-white' : 'text-black'}`}>Fullstack Engineer</p>
          </div>

          <div className="text-center md:text-left layout-transition">
            <p className="text-lg md:text-xl text-gray-400">SERVICE</p>
            <p className={`font-bold text-xl md:text-2xl ${isdark ? 'text-white' : 'text-black'}`}>Fullstack development</p>
          </div>
        </div>

        <div className="rounded-2xl px-4 sm:px-8 md:px-8 py-9 md:py-16 bg-gray-100 mx-auto mt-8 md:mt-16 shadow-xl overflow-hidden slide-from-right layout-transition">
       
          <div className="relative w-full md:w-[600px] lg:w-[800px] xl:w-[1100px] mx-auto overflow-hidden layout-transition">
            {frame1 && (
              <ImageWithSkeleton
                src={pigeonhire}
                alt="Pigeonhire main"
                className="w-full h-full object-cover rounded-lg"
                onLoad={handleImageLoad}
                loadingKey="main"
              />
            )}

            {frame2 && (
              <ImageWithSkeleton
                src={pigeonpricing}
                alt="Pigeonhire pricing"
                className="w-full h-full object-cover rounded-lg"
                onLoad={handleImageLoad}
                loadingKey="main"
              />
            )}

            {frame3 && (
              <ImageWithSkeleton
                src={pigeonfaq}
                alt="Pigeonhire FAQ"
                className="w-full h-full object-cover rounded-lg"
                onLoad={handleImageLoad}
                loadingKey="main"
              />
            )}
          </div>

        
          <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-9 layout-transition">
            <div 
              onClick={handleFrame1} 
              className={`cursor-pointer transition-all duration-200 ${
                frame1 ? 'opacity-100 border-2 border-black scale-105' : 'opacity-40 hover:opacity-75'
              } rounded-md transform hover:scale-105`}
            >
              <img
                src={pigeonhire}
                alt="Thumbnail 1"
                className="object-cover w-[100px] h-[80px] md:w-[150px] md:h-[120px] rounded-md"
                onLoad={handleImageLoad}
                loadingKey="thumb1"
              />
            </div>

            <div 
              onClick={handleFrame2} 
              className={`cursor-pointer transition-all duration-200 ${
                frame2 ? 'opacity-100 border-2 border-black scale-105' : 'opacity-40 hover:opacity-75'
              } rounded-md transform hover:scale-105`}
            >
              <img
                src={pigeonpricing}
                alt="Thumbnail 2"
                className="object-cover w-[100px] h-[80px] md:w-[150px] md:h-[120px] rounded-md"
                onLoad={handleImageLoad}
                loadingKey="thumb2"
              />
            </div>

            <div 
              onClick={handleFrame3} 
              className={`cursor-pointer transition-all duration-200 ${
                frame3 ? 'opacity-100 border-2 border-black scale-105' : 'opacity-40 hover:opacity-75'
              } rounded-md transform hover:scale-105`}
            >
              <img
                src={pigeonfaq}
                alt="Thumbnail 3"
                className="object-cover w-[100px] h-[80px] md:w-[150px] md:h-[120px] rounded-md"
                onLoad={handleImageLoad}
                loadingKey="thumb3"
              />
            </div>
          </div>
        </div>


        </div>


<div className="mb-32"></div>
    </div>
  );
};

export default CaseStudy;