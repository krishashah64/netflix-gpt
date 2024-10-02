import React from 'react'

const VideoTitle = ({title, overview}) => {
  
  console.log(title);
  
  return (
    <div className='w-screen h-screen aspect-video bg-gradient-to-r from-black text-black pt-[20%] px-24 absolute ' > 

       <h1 className='font-bold text-4xl text-white'>
            {title}
       </h1> 
       <p className='py-6 font-bold text-md text-wrap w-2/4 text-white '>{overview}</p>

       <div className='flex'>
          <button className='py-2 text-black bg-white px-6 flex rounded-sm mr-1 hover:bg-opacity-80'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
              <span className='px-1'>Play</span>
          </button>

          <button className='py-2 text-white bg-gray-400 ml-1 px-6 flex bg-opacity-40 rounded-sm'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>

              <span className='px-1'>More Info</span>
          </button>
       </div>
       
    </div>
  )
}

export default VideoTitle;