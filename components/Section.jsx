import { HeartIcon } from '@heroicons/react/outline'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import{
    CheckCircleIcon
} from "@heroicons/react/outline"
function Section() {
  return (
    <div className='text-center'>
        <CheckCircleIcon className='w-8 h-8 inline'/>
        <h1 className='font-bold text-2xl inline mt-5'>About Me</h1>
        <div className='m-16 mt-5 w-fit'>
            <p>I'm amirali ghasemi and i'm here to make beautiful web desings</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laborum quo ea, deserunt doloribus vitae tempora rem officiis error at blanditiis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corporis eum officia. Beatae quas illum qui nostrum id, debitis nisi adipisci numquam vel! Voluptates inventore, aperiam ab vero similique asperiores!</p>
        </div>
        <Swiper  
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='m-2'><Image layout='fixed' src="/photoS.jpg" width={327} height={154} alt="random-zero"/>
          <Image layout='fixed' src="/random1.jpg" width={327} height={154}  alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/random2.jpg" width={327} height={154}  alt="random-zero" />
          <Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/images.jpg" width={327} height={154} alt="random-zero" />
          <Image layout='fixed' src="/random3.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/rand5om.jpg" width={327} height={154} alt="random-zero" />
          <Image layout='fixed' src="/random4.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" />
          <Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" />
          <Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" />
          <Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" />
          <Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" />
          <Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
        </Swiper>
    </div>
  )
}
export default Section

