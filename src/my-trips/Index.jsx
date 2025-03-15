import { db } from '@/service/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';  // FIX: Changed to useNavigate
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {
  const navigate = useNavigate();  // FIX: useNavigate instead of useNavigation
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, []);

  /**
   * used to get all user trips
   * @returns 
   */
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      console.log("No user found in localStorage");
      navigate('/');  
      return;
    }
    console.log("User data:", user); // ✅ Debugging step
      
    try {
      const q = query(collection(db, 'AITrips'), where('userEmail', '==', user.email));
      const querySnapshot = await getDocs(q);
      setUserTrips([]);

      console.log("Query Snapshot empty:", querySnapshot.empty); // ✅ Debugging step

      if (querySnapshot.empty) {
        console.log("No trips found for this user.");
        return;
      }

      // ✅ Collect all trips into an array
      const trips = [];
      querySnapshot.forEach((doc) => {
        console.log("Trip found:", doc.id, doc.data()); // ✅ Debugging step
        trips.push(doc.data());
      });

      setUserTrips(trips);  // ✅ Update state with collected trips
      console.log("Updated state:", trips); // ✅ Debugging step

    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };


  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>My Trips</h2>

      <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
        {userTrips?.length > 0 ? 
          userTrips.map((trip, index) => (
            <UserTripCardItem key={index} trip={trip} /> // FIX: Added key prop
          ))
         :[1,2,3,4,5,6].map((item,index)=>(
            <div key={index} className='h-[250px] w-full bg-slate-300 animate-pulse rounded-xl'>

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MyTrips;
