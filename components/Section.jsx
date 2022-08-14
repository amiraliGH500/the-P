
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import{
    CheckCircleIcon
} from "@heroicons/react/outline"
function Section() {
  return (
    <div className='text-center'>
        <CheckCircleIcon className='w-8 h-8 inline'/>
        <h1 className='font-bold text-2xl inline mt-5' id='About-Me'>About Me</h1>
        <div className='m-16 mt-5 w-fit'>
            <p>من امیرعلی قاسمی هستم و اینجام تا صفحات وب زیبا خلق کنم</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه </p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و </p>
        </div>
        <Swiper  
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='m-2 mb-20'><Image layout='fixed' src="/photoS.jpg" width={327} height={154} alt="random-zero"/>
          <Image layout='fixed' src="/chevrolet.png" width={327} height={154}  alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/nature.jpg" width={327} height={154}  alt="random-zero" />
          <Image layout='fixed' src="/ubuntu.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/images.jpg" width={327} height={154} alt="random-zero" />
          <Image layout='fixed' src="/random3.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/cat.jpg" width={327} height={154} alt="random-zero" />
          <Image layout='fixed' src="/random4.jpg" width={327} height={154} alt="random-zero" /></SwiperSlide>
          <SwiperSlide className='m-2'><Image layout='fixed' src="/to the moon.jpg" width={327} height={154} alt="random-zero" />
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
        <div >
        <CheckCircleIcon className='w-8 h-8 inline'/>
        <h1 className='font-bold text-2xl inline mt-60' id='clients'>مراجع</h1>
          <div className='flex justify-center justify-evenly'>
            <div className='w-72 h-96 border-white rounded-lg border-4 mt-9 hover:text-black hover:bg-white group'>
              <div>
                <div className='flex mb-10'>
                <svg className='ml-5 mt-5 group-hover:stroke-black' width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z" fill="white"/></svg>
                <div>
                  <h1 className='font-bold text-xl mt-10 ml-10'> Aplle.inc</h1>
                  <p className='w-36 ml-6 mt-3 bg-blue-900 rounded-lg group-hover:text-white'>توسعه دهنده وب</p>
                </div>
                </div>
              </div>
              <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و </h1>
            </div>
            <div className='w-72 h-96 border-white rounded-lg border-4 mt-9 hover:text-black hover:bg-white group'>
              <div>
                <div className='flex mb-10'>
                <svg className='ml-5 mt-5 group-hover:stroke-black' width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z" fill="white"/></svg>
                <div>
                  <h1 className='font-bold text-xl mt-10 ml-10'> Aplle.inc</h1>
                  <p className='w-36 ml-6 mt-3 bg-blue-900 rounded-lg group-hover:text-white'>توسعه دهنده وب</p>
                </div>
                </div>
              </div>
              <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و </h1>
            </div>
            <div className='w-72 h-96 border-white rounded-lg border-4 mt-9 hover:text-black hover:bg-white group'>
              <div>
                <div className='flex mb-10'>
                <svg className='ml-5 mt-5 group-hover:stroke-black' width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z" fill="white"/></svg>
                <div>
                  <h1 className='font-bold text-xl mt-10 ml-10'> Aplle.inc</h1>
                  <p className='w-36 ml-6 mt-3 bg-blue-900 rounded-lg group-hover:text-white'>توسعه دهنده وب</p>
                </div>
                </div>
              </div>
              <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و </h1>
            </div>
          </div>
          </div>
    </div>
  )
}
export default Section
