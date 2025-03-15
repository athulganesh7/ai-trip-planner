import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";


function InfoSection({ userSelection }) {

    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        userSelection && GetPlacePhoto();
    }, [userSelection])



    const GetPlacePhoto = async () => {
        const data = {
            textQuery: userSelection?.location?.label
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
        <div>


            {/* <img src={photoUrl} className='h-[340px] w-full object-cover rounded-xl'  alt="Image Error" /> */}
            <img src={photoUrl ? photoUrl:"https://images.moneycontrol.com/static-mcnews/2024/12/20241216120709_14-girls-affordable-trips-in-india.jpg?impolicy=website&width=770&height=431"}  className='h-[340px] w-full object-cover rounded-xl' alt="Image Error" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{userSelection?.location?.label}</h2>
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500  text-xs md:text-md'>📅{userSelection?.noOfDays}Day</h2>

                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰{userSelection?.budget}Budget</h2>

                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🏝️No of Traveller: {userSelection?.traveler}</h2>



                    </div>
                </div>
                <Button><IoIosSend /></Button>
            </div>

        </div>
    )
}

export default InfoSection