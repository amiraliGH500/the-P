import React from 'react'
import Image from 'next/image'

function Nav() {
  return (
    <div>
        <div className="overflow-hidden h-14 bg-gradient-to-r from-gray-500 to-white m-16 h-96 flex justify-center just text-black text-center rounded-xl">
            <div>
            <h1 className='w-96 m-auto mt-28'> Lorem ipsum dolor sit amet consectetur adipisicing elit. In non cumque impedit quidem numquam labore sit est officiis tempora, ullam rem doloremque! Atque beatae mollitia similique qui, commodi minus alias.</h1>
            <button className='bg-cyan-700  shadow-xl rounded-lg h-10 w-32 m-auto active:shadow-none hover:bg-cyan-400 hover:text-white'>check-it out</button>
            </div>
            <Image
            className='object-cover m-5 w-96 rounded-xl'
            src='pexels-gabii-fernandez-11545053.jpg'/>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Nav