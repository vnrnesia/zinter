import React from 'react'
import ContactSlide from "./ContactSlideForm"
const GetStarted = () => {
  return (
   <div className="bg-gradient-to-l  from-[#0273DE] to-[#10B0EB] ">
     <div className="flex flex-col gap-6  justify-center items-center max-w-[90%] mx-auto md:px-0 px-6">
      <div className=" md:px-0 max-w-sm flex flex-col items-start md:max-w-7xl w-full mb-6">
       
       
      </div>

      <div className="rounded-2xl max-w-sm md:max-w-7xl  w-full  sm:p-10 md:p-12 flex flex-col md:flex-row justify-between items-stretch">
        <div className="flex  md:ml-24 flex-col md:w-1/2 w-full md:pr-8">
               <ContactSlide />

        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className=" rounded-md flex items-center justify-center h-[300px] w-[350px] md:w-[500px] to-[#11B4EC] relative">
            <img
              src="/world.png"
              alt="world"
              className="w-full absolute max-w-[350px] md:max-w-[400px] md:pt-[180px]"
            />
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default GetStarted