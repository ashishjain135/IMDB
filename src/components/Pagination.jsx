import React from 'react'

function Pagination({nextPagefn, prevPagefn, PageNo}) {
  return (
   <>
    <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center items-center'>
            <div onClick={prevPagefn} className='px-8 hover:cursor-pointer'>
                <i className="fa-solid fa-circle-left text-3xl m-5 hover:cursor-pointer"></i>
            </div>
            <div>{PageNo}</div>
            <div onClick={nextPagefn} className='px-8 hover:cursor-pointer'>
                <i className="fa-solid fa-circle-right text-3xl m-5 hover:cursor-pointer"></i>
            </div>
        </div>
   </>
  )
}

export default Pagination