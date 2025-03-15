import React, { useEffect, useState } from 'react'
import { Button } from '../button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

// dialog shadcn
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { FcGoogle } from "react-icons/fc";
import axios from 'axios';



function Header() {
    const [openDailog, setOpenDialog] = useState(false)
  
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    console.log(user);

  }, [])



  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
     window.location.reload();

    })
  }
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)


  })
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <a href="/"><img className='h-32' src="/triplogo-removebg-preview.png" alt="" /></a>
      <div>
        {
          user ? <div className='flex items-center gap-3'>
             <a href="/create-trip">
            <Button varient="outline" className="rounded-full">Create Trip</Button>
            </a>
            <a href="/my-trips">
            <Button varient="outline" className="rounded-full">My Trips</Button>
            </a>
            
            <Popover>
              <PopoverTrigger>
                <img className='w-[35px] h-[35px] rounded-full cursor-pointer' crossOrigin="anonymous" referrerPolicy="no-referrer" src={user?.picture} alt="" />
                </PopoverTrigger>
              <PopoverContent>
                <h2 className='cursor-pointer' onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Logout</h2>
              </PopoverContent>
            </Popover>

          </div> :
            <Button onClick={()=>setOpenDialog(true)}>Sign In</Button>
        }
      </div>
      <Dialog open={openDailog}>

<DialogContent>
  <DialogHeader>

    <DialogDescription>
      <img src="/logo.svg" alt="" />
      <h2 className='font-bold text-lg mt-7 text-black'>Sign with Google</h2>
      <p>Sign to the App with Google authentication securely</p>
      <Button
        onClick={login}
        className='w-full mt-5 flex gap-3 items-center'>
        <FcGoogle className='h-7 w-7' />
        Sign in with Google</Button>
    </DialogDescription>
  </DialogHeader>
</DialogContent>
</Dialog>
    </div>
  )
}

export default Header