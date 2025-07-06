export const FirstHome = () => {
	return (
	  <div
		id="FirstHome"
		className="h-screen bg-black flex justify-center items-center overflow-hidden 
				  md:h-[80vh] sm:h-[60vh] max-[480px]:h-[45vh]"
	  >
		<h1
		  className="text-[20rem] font-emoji text-white
					 max-[1200px]:text-[14rem] 
					 max-[992px]:text-[10rem] 
					 max-[768px]:text-[8rem] 
					 max-[480px]:hidden"
		>
		  EY
		</h1>
  
		<div
		  className="relative w-[800px] h-[400px]  bg-gray-100 
					 sm:rounded-none"
		>
		  <video
		autoPlay
		muted
		loop
		playsInline
		preload="auto"
		className="w-full h-full object-cover sm:rounded-none"
		>
		<source src="/assets/video/home.mp4" type="video/mp4" />
		Ձեր browser-ը չի աջակցում տեսանյութեր։
		</video>

  
		  {/* "::after" equivalent */}
		  <div className="absolute w-[120%] h-[0.5px] bg-black left-[-10%] bottom-[-60px] max-[992px]:bottom-[-40px] max-[568px]:bottom-[-20px] max-[480px]:hidden"></div>
  
		  {/* "::before" equivalent */}
		  <div className="absolute rotate-90 left-1/2 bottom-[-120px] text-[36px] max-[992px]:bottom-[-80px] max-[992px]:text-[28px] max-[568px]:bottom-[-60px] max-[568px]:text-[24px] max-[480px]:bottom-[-50px] max-[480px]:text-[20px]">
			&gt;
		  </div>
  
		  {/* "::after" text for small screens */}
		  <div className="hidden max-[480px]:block absolute text-[13vw] text-center w-full h-[120px] font-bold bg-white bottom-0 left-0">
			EYES BRAND
		  </div>
		</div>
  
		<h1
		  className="text-[20rem] font-emoji text-white
					 max-[1200px]:text-[14rem] 
					 max-[992px]:text-[10rem] 
					 max-[768px]:text-[8rem] 
					 max-[480px]:hidden"
		>
		  ES
		</h1>
	  </div>
	);
  };
  