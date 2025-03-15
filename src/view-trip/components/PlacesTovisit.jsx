import React, { useState } from 'react'
import PlaceCardItem from './PlaceCardItem';

function PlacesTovisit({ tripData }) {

    console.log(tripData);







    return (
        <div>
            <hr />
            <h2 className='font-black text-lg p-5'>Places to visit</h2>
            <hr />
            <div>

                {tripData && (
                    <h2 className='font-bold ms-5'>Total Days: {tripData?.itinerary?.length}</h2>

                )}

                {

                    tripData &&
                    tripData?.itinerary.map((details, dayIndex) => (

                        <div key={dayIndex} className='mt-5' >
                            <h2 className='font-bold text-lg'>Day{dayIndex + 1}</h2>

                            <div className='grid md:grid-cols-2 gap-5'>
                                {Object.keys(details).map((dayKey) => (
                                    details[dayKey]?.plan?.map((place, placeIndex) => (
                                        <div key={placeIndex} className=''>
                                            <h2 className='font-medium text=sm text-orange-600'>{place.bestTimeToVisit}</h2>
                                            {/* <h3>{place.placeName}</h3> */}
                                            <PlaceCardItem place={place} />
                                        </div>
                                    ))
                                ))}
                            </div>
                        </div>
                    ))

                }

                {/* tripData &&
                    tripData?.itinerary[0]?.day1?.plan?.map((place, index) => (
                       <div key={index}>
                            <h3>{place.placeName}</h3>
                       </div>
                    )) */}

                {/* {
                    tripData &&
                    tripData?.itinerary.map((details, dayIndex) =>(
                        details?.day1?.plan?.map((place, placeIndex) => (

                            <div key={`${dayIndex}-${placeIndex}`}>
                                <h2 className='font-medium text-lg'>Day{dayIndex+1}</h2>
                                <div>

                                   <h3>{place.placeName}</h3>
                                </div>
                                
                            </div>

                        ))
                        
                    
                    ))

                } */}








            </div>
        </div>
    )
}

export default PlacesTovisit