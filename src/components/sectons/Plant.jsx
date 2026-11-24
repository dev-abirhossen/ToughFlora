import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { SwiperSlide,Swiper } from 'swiper/react';
import { TbTruckDelivery } from "react-icons/tb";
import PlantsCard from '../common/PlantsCard';


const Plant = () => {
  // const swiper = new swiper()
  return (
    <section className='py-25 bg-gray-200'>
      <Container>
        <div className='grid grid-cols-2 items-center gap-10 '>
          <div>
            <h2 className='text-5xl font-bold '>Finding the right plant, made simple</h2>
            <p className='mt-5 text-base text-gray-500 font-normal '>Three steps from a tricky spot to a plant that's happy in it.</p>
            <Link className='px-7 py-2.5 bg-black text-white inline-block rounded-3xl mt-7' to={"#"}>Find Plant for your space</Link>
          </div>
          <div>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              cardsEffect={{
                slideShadows:false,
              }}
            >
              <SwiperSlide>
                <PlantsCard bgColor={"bg-white"} step={"Step 1"} title={"Tell Us Your Space"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis illum est at eos tempora eius saepe! Explicabo, ducimus iure. Debitis atque incidunt expedita blanditiis, laboriosam eligendi, quidem illum sapiente "}/>
              </SwiperSlide>
              <SwiperSlide>
                 <PlantsCard bgColor={"bg-green-600"} step={"Step 2"} title={"Pick Plants Thats suits It"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis illum est at eos tempora eius saepe! Explicabo, ducimus iure. Debitis atque incidunt expedita blanditiis, laboriosam eligendi, quidem illum sapiente "}/>
              </SwiperSlide>
              <SwiperSlide>
                 <PlantsCard bgColor={"bg-red-600"} step={"Step 3"} title={"We deliver to your door "} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis illum est at eos tempora eius saepe! Explicabo, ducimus iure. Debitis atque incidunt expedita blanditiis, laboriosam eligendi, quidem illum sapiente "}/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Plant