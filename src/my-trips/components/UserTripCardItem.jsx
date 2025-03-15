import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {
        const [photoUrl, setPhotoUrl] = useState();
      
          useEffect(() => {
              trip&& GetPlacePhoto();
          }, [trip])
      
      
      
          const GetPlacePhoto = async () => {
              const data = {
                  textQuery: trip?.userSelection?.location?.label
              }
              try {
                  const result = await GetPlaceDetails(data).then(resp => {
                      console.log("response", resp.data.places[0].photos[3].name);
                      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
                      // console.log(PhotoUrl)
                      setPhotoUrl(PhotoUrl)      
                  })
      
      
      
              } catch (error) {
                  console.log("place" + error);
      
              }
          }
    
  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105  transition-all rounded-xl'>
        <img className='object-cover rounded-xl h-[250px] w-[350px]' src={photoUrl?photoUrl:"https://images.moneycontrol.com/static-mcnews/2024/12/20241216120709_14-girls-affordable-trips-in-india.jpg?impolicy=website&width=770&height=431"}alt="no image" />
        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Day trip with {trip?.userSelection?.budget} budget</h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem