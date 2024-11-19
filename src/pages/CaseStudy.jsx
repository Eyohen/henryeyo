// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import pigeonhire from '../assets/pigeonhire.png';
// import pigeonpricing from '../assets/pigeonpricing.png';
// import pigeonfaq from '../assets/pigeonfaq.png';
// import './Home.css'

// const CaseStudy = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [frame1, setFrame1] = useState(true);
//   const [frame2, setFrame2] = useState(false);
//   const [frame3, setFrame3] = useState(false);

//   const handleFrame1 = () => {
//     setFrame1(true);
//     setFrame2(false);
//     setFrame3(false);
//   };

//   const handleFrame2 = () => {
//     setFrame2(true);
//     setFrame1(false);
//     setFrame3(false);
//   };

//   const handleFrame3 = () => {
//     setFrame3(true);
//     setFrame1(false);
//     setFrame2(false);
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="mt-[100px] md:mt-[185px] px-4 sm:px-6 md:px-12 lg:px-48">
//         <p className="slide-from-top text-sm md:text-base">WEB APPLICATION</p>
//         <p className="font-bold text-3xl md:text-4xl lg:text-5xl pt-4 slide-from-left leading-tight">
//           Business directory to secure partnerships in Communities
//         </p>

//         <div className="flex flex-col md:flex-row md:justify-center gap-y-8 md:gap-x-12 lg:gap-x-32 pt-12 md:pt-24 slide-from-right">
//           <div className="text-center md:text-left">
//             <p className="text-lg md:text-xl">COMPANY</p>
//             <p className="font-bold text-xl md:text-2xl">Pigeonhire</p>
//           </div>

//           <div className="text-center md:text-left">
//             <p className="text-lg md:text-xl">ROLE</p>
//             <p className="font-bold text-xl md:text-2xl">Fullstack Engineer</p>
//           </div>

//           <div className="text-center md:text-left">
//             <p className="text-lg md:text-xl">EXPERTISE</p>
//             <p className="font-bold text-xl md:text-2xl">Fullstack development</p>
//           </div>
//         </div>

//         <div className="rounded-2xl px-4 sm:px-8 md:px-16 py-12 md:py-24 bg-gray-100 mx-auto mt-8 md:mt-16 shadow-xl overflow-hidden slide-from-right">
//           {frame1 && (
//             <div className="relative w-full md:w-[800px] lg:w-[1000px] xl:w-[1300px] mx-auto overflow-hidden">
//               <img 
//                 src={pigeonhire} 
//                 alt="Pigeonhire main"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           )}

//           {frame2 && (
//             <div className="relative w-full md:w-[800px] lg:w-[1000px] xl:w-[1300px] mx-auto overflow-hidden">
//               <img 
//                 src={pigeonpricing} 
//                 alt="Pigeonhire pricing"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           )}

//           {frame3 && (
//             <div className="relative w-full md:w-[800px] lg:w-[1000px] xl:w-[1300px] mx-auto overflow-hidden">
//               <img 
//                 src={pigeonfaq} 
//                 alt="Pigeonhire FAQ"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           )}

//           <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-9">
//             <div 
//               onClick={handleFrame1} 
//               className={`cursor-pointer transition-opacity duration-200 ${
//                 frame1 ? 'opacity-100 border-2 border-black' : 'opacity-40'
//               } rounded-md`}
//             >
//               <img 
//                 src={pigeonhire} 
//                 alt="Thumbnail 1"
//                 className="object-cover w-[100px] h-[80px] md:w-[150px] md:h-[120px] rounded-md"
//               />
//             </div>

//             <div 
//               onClick={handleFrame2} 
//               className={`cursor-pointer transition-opacity duration-200 ${
//                 frame2 ? 'opacity-100 border-2 border-black' : 'opacity-40'
//               } rounded-md`}
//             >
//               <img 
//                 src={pigeonpricing} 
//                 alt="Thumbnail 2"
//                 className="object-cover w-[100px] h-[80px] md:w-[150px] md:h-[120px] rounded-md"
//               />
//             </div>

//             <div 
//               onClick={handleFrame3} 
//               className={`cursor-pointer transition-opacity duration-200 ${
//                 frame3 ? 'opacity-100 border-2 border-black' : 'opacity-40'
//               } rounded-md`}
//             >
//               <img 
//                 src={pigeonfaq} 
//                 alt="Thumbnail 3"
//                 className="object-cover w-[100px] h-[80px] md:w-[150px] md:h-[120px] rounded-md"
//               />
//             </div>
//           </div>
//         </div>

//         {/* project description */}
//         <div className="mt-12 md:mt-24">
//           <p className="font-bold text-3xl md:text-4xl lg:text-5xl">
//             Project Description
//           </p>

//           <p className="font-medium text-lg md:text-xl lg:text-2xl mt-8 md:mt-16 max-w-[900px]">
//             Our client, a leading technology company, aimed to revolutionize scheduling processes worldwide by introducing the world's first AI-powered scheduling app.
//           </p>
//         </div>
//       </div>

//       <div className="mb-32 md:mb-64"></div>
//     </div>
//   );
// };

// export default CaseStudy;


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import pigeonhire from '../assets/pigeonhire.png';
import pigeonpricing from '../assets/pigeonpricing.png';
import pigeonfaq from '../assets/pigeonfaq.png';
import './Home.css';

// Add this CSS to your Home.css file
/*
.layout-transition {
  transition: all 0.3s ease-in-out;
}

.image-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
*/

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
    <div>
      <Navbar />

      <div className="mt-[100px] md:mt-[185px] px-4 sm:px-6 md:px-12 lg:px-48 layout-transition">
        <p className="slide-from-top text-sm md:text-base">WEB APPLICATION</p>
        <p className="font-bold text-3xl md:text-4xl lg:text-5xl pt-4 slide-from-left leading-tight layout-transition">
          Business directory to secure partnerships in Communities
        </p>

        <div className="flex flex-col md:flex-row md:justify-center gap-y-8 md:gap-x-12 lg:gap-x-32 pt-12 md:pt-24 slide-from-right layout-transition">
          <div className="text-center md:text-left layout-transition">
            <p className="text-lg md:text-xl">COMPANY</p>
            <p className="font-bold text-xl md:text-2xl">Pigeonhire</p>
          </div>

          <div className="text-center md:text-left layout-transition">
            <p className="text-lg md:text-xl">ROLE</p>
            <p className="font-bold text-xl md:text-2xl">Fullstack Engineer</p>
          </div>

          <div className="text-center md:text-left layout-transition">
            <p className="text-lg md:text-xl">EXPERTISE</p>
            <p className="font-bold text-xl md:text-2xl">Fullstack development</p>
          </div>
        </div>

        <div className="rounded-2xl px-4 sm:px-8 md:px-16 py-12 md:py-24 bg-gray-100 mx-auto mt-8 md:mt-16 shadow-xl overflow-hidden slide-from-right layout-transition">
          {/* Main Image Display */}
          <div className="relative w-full md:w-[800px] lg:w-[1000px] xl:w-[1300px] mx-auto overflow-hidden layout-transition">
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

          {/* Thumbnails */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-9 layout-transition">
            <div 
              onClick={handleFrame1} 
              className={`cursor-pointer transition-all duration-200 ${
                frame1 ? 'opacity-100 border-2 border-black scale-105' : 'opacity-40 hover:opacity-75'
              } rounded-md transform hover:scale-105`}
            >
              <ImageWithSkeleton
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
              <ImageWithSkeleton
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
              <ImageWithSkeleton
                src={pigeonfaq}
                alt="Thumbnail 3"
                className="object-cover w-[100px] h-[80px] md:w-[150px] md:h-[120px] rounded-md"
                onLoad={handleImageLoad}
                loadingKey="thumb3"
              />
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-12 md:mt-24 layout-transition">
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl layout-transition">
            Project Description
          </p>

          <p className="font-medium text-lg md:text-xl lg:text-2xl mt-8 md:mt-16 max-w-[900px] layout-transition">
            Our client, a leading technology company, aimed to revolutionize scheduling processes worldwide by introducing the world's first AI-powered scheduling app.
          </p>
        </div>
      </div>

      <div className="mb-32 md:mb-64"></div>
    </div>
  );
};

export default CaseStudy;