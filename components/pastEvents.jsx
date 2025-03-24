// import React from "react";

//   const PastEvents = () => {
//     return (
//       <div
//         className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-cover "
//         style={{ backgroundImage: "url('/pastevents/background.svg')" }}
//       >
       
//         <img
//           src="/pastevents/PAST EVENTS.svg"
//           alt="Our Past Events"
//           className="absolute top-8 sm:left-10 left-13 w-72 sm:w-96"
//         />

//         <img
//           src="/pastevents/Group 9885.svg"
//           alt="Past Events Logo"
//           className="absolute w-50 left-[29%] top-[18%] md:top-[11%] lg:left-[80%] md:left-[74%] w-[180px] md:w-[200px]  md:absolute md:block sm:hidden sm:left-[60%] "
//         />
       
       
//        <div className="relative w-full overflow-hidden">
//         <div className="flex w-[800%] sm:w-[300%] animate-slideLoop hover:[animation-play-state:paused] flex-nowrap">
//           {[...Array(10)].map((_, index) => ( // Duplicate images
//           <div key={index} className="flex w-1/3 flex-shrink-0 justify-around gap-5 px-5">
//              <img
//             src="/pastevents/Frame 9871.svg"
//             alt="CAD 2.0"
//             className="w-[48%] sm:w-[48%] rounded-lg shadow-lg"
//             />
//             < img
//             src="/pastevents/image 10 (5).svg"
//             alt="Skin Maker"
//             className="w-[48%] sm:w-[48%] rounded-lg shadow-lg "
//             />
//           </div>
//           ))}
//         </div>
//       </div>
       
       
//         <img
//           src="/pastevents/logo.svg"
//           alt="Logo"
//           className="absolute bottom-5 left-5 w-16 sm:w-24"
//         />

       
//         <style>
//           {`
//             @keyframes slideLoop {
//               0% { transform: translateX(0%); }
//               100% { transform: translateX(-100%); }
//             }
//             .animate-slideLoop {
//               animation: slideLoop 21s linear infinite;
//             }
//           `}
//         </style>

//       </div>
//     );
//   };

//   export default PastEvents;

// import React from "react";

//   const PastEvents = () => {
//     return (
//       <div
//         className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-cover "
//         style={{ backgroundImage: "url('/pastevents/background.svg')" }}
//       >
       
//         <img
//           src="/pastevents/PAST EVENTS.svg"
//           alt="Our Past Events"
//           className="absolute top-8 sm:left-10 left-13 w-72 sm:w-96"
//         />

//         <img
//           src="/pastevents/Group 9885.svg"
//           alt="Past Events Logo"
//           className="absolute w-50 left-[29%] top-[18%] md:top-[11%] lg:left-[80%] md:left-[74%] w-[180px] md:w-[200px]  md:absolute md:block sm:hidden sm:left-[60%] "
//         />
       
       
//        <div className="relative w-full overflow-hidden">
//         <div className="flex w-[800%] sm:w-[300%] animate-slideLoop hover:[animation-play-state:paused] flex-nowrap">
//           {[...Array(10)].map((_, index) => ( // Duplicate images
//           // <div key={index} className="flex w-1/3 flex-shrink-0 justify-around gap-5 px-5">
//           //    <img
//           //   src="/pastevents/Frame 9871.svg"
//           //   alt="CAD 2.0"
//           //   className="w-[48%] sm:w-[48%] rounded-lg shadow-lg"
//           //   />
//           //   < img
//           //   src="/pastevents/image 10 (5).svg"
//           //   alt="Skin Maker"
//           //   className="w-[48%] sm:w-[48%] rounded-lg shadow-lg "
//           //   />
//           // </div>
//           <div key={index} className="flex w-1/3 flex-shrink-0 justify-around gap-5 px-5">
            
//             <div className="flex justify-around items-center w-full">
//   <img 
//     src="/pastevents/Frame 9871.svg" 
//     alt="CAD 2.0" 
//     className="w-[30%] sm:w-[30%] h-auto rounded-lg shadow-lg"
//   />
//   <img 
//     src="/pastevents/image 10 (5).svg" 
//     alt="Skin Maker" 
//     className="w-[30%] sm:w-[30%] h-auto rounded-lg shadow-lg drop-shadow-[0_8px_25px_rgba(10,10,10,0.95)]
// "
//   />
//   <img 
//     src="/CQ-3.0-new.jpg" 
//     alt="New Event" 
//     className="w-[30%] sm:w-[30%] h-auto rounded-lg shadow-lg drop-shadow-[0_6px_20px_rgba(0,255,204,1)]"
//   />
// </div>

// </div>
        

//           ))}
//         </div>
//       </div>
       
       
//         <img
//           src="/pastevents/logo.svg"
//           alt="Logo"
//           className="absolute bottom-5 left-5 w-16 sm:w-24"
//         />

       
//         <style>
//           {`
//             @keyframes slideLoop {
//               0% { transform: translateX(0%); }
//               100% { transform: translateX(-100%); }
//             }
//             .animate-slideLoop {
//               animation: slideLoop 21s linear infinite;
//             }
//           `}
//         </style>

//       </div>
//     );
//   };
import React from "react";

  const PastEvents = () => {
    return (
      <div
        className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-cover "
        style={{ backgroundImage: "url('/pastevents/background.svg')" }}
      >
       
        <img
          src="/pastevents/PAST EVENTS.svg"
          alt="Our Past Events"
          className="absolute top-8 sm:left-10 left-13 w-72 sm:w-96"
        />

        <img
          src="/pastevents/Group 9885.svg"
          alt="Past Events Logo"
          className="absolute w-50 left-[29%] top-[18%] md:top-[11%] lg:left-[80%] md:left-[74%] w-[180px] md:w-[200px]  md:absolute md:block sm:hidden sm:left-[60%] "
        />
       
       
       <div className="relative w-full overflow-hidden">
        <div className="flex w-[800%] sm:w-[300%] animate-slideLoop hover:[animation-play-state:paused] flex-nowrap">
          {[...Array(10)].map((_, index) => ( // Duplicate images
          // <div key={index} className="flex w-1/3 flex-shrink-0 justify-around gap-5 px-5">
          //    <img
          //   src="/pastevents/Frame 9871.svg"
          //   alt="CAD 2.0"
          //   className="w-[48%] sm:w-[48%] rounded-lg shadow-lg"
          //   />
          //   < img
          //   src="/pastevents/image 10 (5).svg"
          //   alt="Skin Maker"
          //   className="w-[48%] sm:w-[48%] rounded-lg shadow-lg "
          //   />
          // </div>
          <div key={index} className="flex w-1/3 flex-shrink-0 justify-around gap-5 px-5">
            
            <div className="flex justify-around items-center w-full">
  <img 
    src="/pastevents/Frame 9871.svg" 
    alt="CAD 2.0" 
    className="w-[30%] sm:w-[30%] h-auto rounded-lg shadow-lg"
  />
  <img 
    src="/pastevents/image 10 (5).svg" 
    alt="Skin Maker" 
    className="w-[30%] sm:w-[30%] h-auto rounded-lg shadow-lg drop-shadow-[0_8px_25px_rgba(10,10,10,0.95)]
"
  />
  <img 
    src="/CQ-3.0-new.jpg" 
    alt="New Event" 
    className="w-[30%] sm:w-[30%] h-auto rounded-lg shadow-lg drop-shadow-[0_6px_20px_rgba(0,255,204,1)]"
  />
</div>

</div>
        

          ))}
        </div>
      </div>
       
       
        <img
          src="/pastevents/logo.svg"
          alt="Logo"
          className="absolute bottom-5 left-5 w-16 sm:w-24"
        />

       
        <style>
          {`
            @keyframes slideLoop {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
            .animate-slideLoop {
              animation: slideLoop 21s linear infinite;
            }
          `}
        </style>

      </div>
    );
  };

  export default PastEvents;


//   export default PastEvents;

