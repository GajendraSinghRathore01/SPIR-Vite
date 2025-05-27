import React from 'react'
import { call, location, message, whiteLogo } from '../assets'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-[#3e7cfa] text-white py-8 rounded-t-xl'>
        <div className='w-[90%] mx-auto'>
        <div className='grid grid-cols-4 gap-36 '>
            <div className='flex flex-col gap-4'>
                <img className='w-40' src={whiteLogo} />
                <p>East Tejturi Bazar, Word No. 04,
                    Road No. 13/x, House No. 1320/c, 
                    Flat No. 5D, Dhaka-1200, Bangladesh
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-xl'>Quick Links</h3>
                <Link to="/"><p>Home</p></Link>
                <Link to="#"><p>About Us</p></Link>
                <Link to="#"><p>Events</p></Link>
                <Link to="#"><p>Schemes</p></Link>
                <Link to="#"><p>Industrial Report</p></Link>
            </div>
            <div className='flex flex-col gap-5 '>
                <h3 className='text-xl m-0 '>Help</h3>
                 <Link to="#"><p>Terms of Service</p></Link>
                 <Link to="#"><p>Privacy Policy</p></Link>
                 <Link to="#"><p>FAQ's</p></Link>
            </div>
            <div className='flex flex-col space-y-4'>
                <h3 className='text-xl'>Contact</h3>
                <div className='flex space-x-2 items-center'><img src={call} /> <p>91+ 7408733333, 91+ 7607655555</p></div>
               <div  className='flex space-x-2 items-center'> <img src={message} /> <p>support@iid.org.in</p></div>
               <div  className='flex space-x-2 items-center '> <img src={location} /> <p>Noida Office: A-18, First Floor Sector-6, Noida 201301</p></div>
            </div>
        </div>
        <hr className='mt-8 opacity-30'></hr>
        <div className='flex justify-center pt-6'>
            <p>© 2025 Loreum ipsum. All Right Reserved.</p>
        </div>
        </div>
    </div>
  )
}

export default Footer
