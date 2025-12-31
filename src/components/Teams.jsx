import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
    return (
        <div className='flex flex-col items-center gap-7 pt-40 px-4 sm:px-12 lg:px-24 xl:px-40 text-center  text-gray-700 dark:text-white'>
            <Title title={`Meet the them`} desc={` a passionate of digital exprerssts dedication to your brand's succe`} />

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {teamData.map((Time, index) => (
                    <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700
                         bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400'>
                        <img src={Time.image} alt="" className='w-12 h-12 rounded-full' />
                        <div>
                            <h3 className='font-bold text-sm'>{Time.name}</h3>
                            <p className='text-xs opacity-60'>{Time.title}</p>
                        </div>

                    </div>

                ))}

            </div>

        </div>

    )
}

export default Teams