import React from 'react'
import Image from 'next/image'

function Nav() {
  return (
    <div>
        <div className="overflow-hidden  bg-gradient-to-r from-gray-500 to-white m-16 h-96 flex justify-center just text-black text-center rounded-xl">
            <div>
            <h1 className='w-96 m-auto mt-28'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، </h1>
            <button className='bg-cyan-700  shadow-xl rounded-lg h-10 w-32 m-auto active:shadow-none hover:bg-cyan-400 hover:text-white'>لورم ایپسوم متن </button>
            </div>
            <img
            layout=''
            className='object-cover m-5 w-96 rounded-xl'
            src='/pexels-gabii-fernandez-11545053.jpg' alt='yooo'/>
        </div>

    </div>
  )
}

export default Nav