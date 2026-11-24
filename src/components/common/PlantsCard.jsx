import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const PlantsCard = ({step, title, desc, bgColor}) => {
    return (
        <div className={`max-w-115 shadow-2xl rounded-2xl p-8 ${bgColor}`}>
            <div>
                <div className='flex justify-between'>
                    <Link className='px-5 py-2.5 border rounded-3xl'>{step}</Link>
                    <span className='size-10 rounded-full flex justify-center items-center bg-red-300 text-white text-2xl '><TbTruckDelivery /></span>
                </div>
                <h3 className='text-4xl font-bold text-black mt-15 w-55'>{title}</h3>
                <div className='bg-gray-200 px-2.5 py-8 text-lg rounded-2xl mt-25'>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default PlantsCard