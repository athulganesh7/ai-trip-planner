import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {

    const [photoUrl, setPhotoUrl] = useState();
        
            useEffect(() => {
                place&& GetPlacePhoto();
            }, [place])
        
            const GetPlacePhoto = async () => {
                const data = {
                    textQuery: place?.placeName
                }
                try {
                    const result = await GetPlaceDetails(data).then(resp => {
                        console.log("hotelPhoto", resp.data.places[0].photos[3].name);
                        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
                        console.log("hotelPhoto",PhotoUrl)
                        setPhotoUrl(PhotoUrl)
                    })
        
                } catch (error) {
                    console.log("place" + error);
        
                }
            }


  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img className='w-[130px] h-[130px] rounded-xl' crossOrigin="anonymous" referrerPolicy="no-referrer" src={photoUrl ? photoUrl:"https://images.moneycontrol.com/static-mcnews/2024/12/20241216120709_14-girls-affordable-trips-in-india.jpg?impolicy=website&width=770&height=431"} alt="" />
        <div>
        <h3 className='font-bold text-lg'>{place?.placeName}</h3>
        <p className='text-sm text-gray-400'>{place?.placeDetails}</p>
        <h2>🕙: {place.timeTravel}</h2>
        <Button size="sm" ><FaLocationDot /></Button>

        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem