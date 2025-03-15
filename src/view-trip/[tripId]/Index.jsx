import { db } from '@/service/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesTovisit from '../components/PlacesTovisit';
import Footer from '../components/Footer';

function Viewtrip() {

  const {tripId}=useParams();
  const [trip,setTrip]=useState([]);
  const [tripData,setTripData]=useState();
  const [userSelection, setUserSelection] = useState()
  const [hotels, setHotels] = useState()


  useEffect(()=>{
    tripId&&GetTripData();
  },[tripId])

  // used to get trip information form firebase
  const GetTripData = async () => {
    try {
        const docRef = doc(db, 'AITrips', tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const data = docSnap.data()
            setTrip(data);
            setUserSelection(data.userSelection)
            setHotels(data.tripData.hotels)
            setTripData(data.tripData)
        } else {
            console.log("No such document!");
            toast("No trip found");
        }
    } catch (error) {
        console.error("Error fetching trip data:", error);
        toast("Failed to fetch trip data");
    }
};

  
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      
        {/* information section */}
       {userSelection && <InfoSection userSelection={userSelection} />}

        {/* recommended hotels */}
        <Hotels hotels={hotels}/>

        {/* // daily plan  */}
        <PlacesTovisit tripData={tripData}/>

        {/* // footer */}
        <Footer tripData={tripData}/>
      
    </div>
  )
}

export default Viewtrip