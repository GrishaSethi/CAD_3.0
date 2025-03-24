// import React from 'react';

// const Sponsors = () => {
// 	return (
// 	<div className='bg-black'>
// 		<div className='flex flex-col items-center'>
// 			<div className='lg:text-[158px] md:text-[90px] text-[70px] font-bebas-neue relative w-full'>
// 				<div className='flex justify-center gap-x-4 mt-[100px]'>
// 					OUR <span className='text-[#FF0000]'>SPONSORS</span>
// 				</div>
// 				<div className='flex flex-row justify-between absolute top-[-30px]'>
// 					<div>
// 						<img src='spotlightleft.png'/>
// 					</div>
// 					<div>
// 						<img src='spotlightright.png'/>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='flex lg:flex-row md:flex-row flex-col items-center mb-[100px]'>
// 				<div className='flex flex-col items-center text-[#D4D4D4] lg:text-[37px] bg-gradient-to-r from-[#F5F5F5] to-[#8F8F8F] text-transparent bg-clip-text font-sf'>
// 					<img className='lg:h-[350px] h-[300px]' src='platinum.png'/>
// 					Platinum
// 				</div>
// 				<div className='flex flex-col items-center text-[#F6D577] lg:text-[37px] font-sf'>
// 					<img className='lg:h-[350px] h-[300px]' src='gold.png'/>
// 					Gold
// 				</div>
// 				<div className='flex flex-col items-center text-[#D4D4D4] lg:text-[37px] font-sf'>
// 					<img className='lg:h-[350px] h-[300px]' src='silver.png'/>
// 					Silver
// 				</div>
// 				<div className='flex flex-col items-center text-[#FAA682] lg:text-[37px] font-sf'>
// 					<img className='lg:h-[350px] h-[300px]' src='bronze.png'/>
// 					Bronze
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	)
// };

// export default Sponsors;
import React from 'react';

const Sponsors = () => {
  return (
    <div className="bg-black py-10">
      <div className="flex flex-col items-center relative">
        {/* Sponsors Title */}
        <h1 className="lg:text-[158px] md:text-[90px] text-[70px] font-bebas-neue text-center text-[#E8E8E8]">
          OUR <span className="text-[#FF0000]">SPONSORS</span>
        </h1>

        {/* Scrolling Sponsor Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 px-5 w-max animate-scrollLoop">
            {/* Duplicate set of images for seamless looping */}
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex gap-8">
                <img src="/sponsor_new.png" alt="Sponsor" className="h-[200px] md:h-[250px] lg:h-[300px] object-contain"/>
                <img src="/xyz-logo-color.png" alt="Sponsor" className="h-[200px] md:h-[250px] lg:h-[300px] object-contain"/>
                <img src="/TPF-logo.png" alt="Sponsor" className="h-[200px] md:h-[250px] lg:h-[300px] object-contain"/>
                <img src="/unstop.png" alt="Sponsor" className="h-[200px] md:h-[250px] lg:h-[300px] object-contain"/>
              </div>
            ))}
          </div>
        </div>
		<div className="text-white text-[40px] font-bold mt-6">
  Powered by <span className="text-[#FF0000]">Unstop</span>
</div>



        {/* Keyframes for Continuous Scrolling */}
        <style>
          {`
            @keyframes scrollLoop {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-scrollLoop {
              display: flex;
              animation: scrollLoop 15s linear infinite;
              width: max-content;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Sponsors;