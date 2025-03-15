import React from 'react'
import HotelCardItem from './HotelCardItem'

function Hotels({hotels}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5 my-3'>Hotel Recommendation</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-col-4 gap-5'>
            {
                hotels?.map((hotel,index)=>(
                  <HotelCardItem hotel={hotel} />
                ))
            }
        </div>
    </div>
  )
}

export default Hotels