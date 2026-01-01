import React from 'react'
import Title from './Title' 
import assets from '../assets/assets'

const WorkData =[
  {title:"Mobile App Marketing",
  description:"We turn bold ideas into powerful digital solutions that connect, engage, and convert users through effective mobile app marketing strategies.",
  image:assets.work_mobile_app
},
{title:"Dashboard Management",
  description:"We build intuitive and scalable dashboards that help businesses monitor performance, analyze data, and make informed decisions.",
  image:assets.work_dashboard_management 
},
{title:"Web Development",
  description:"We design and develop fast, responsive, and secure websites that deliver seamless user experiences across all devices.",
  image:assets.work_fitness_app
}
]
const OurWork = () => {
  return (
    <div id="Our Work"
            className="flex flex-col items-center gap-7 pt-40 px-4 sm:px-12 lg:px-24 xl:px-40 text-center  text-gray-700 dark:text-white">
              <Title title="Our latest Work" desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results"/>

              <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {
                  WorkData.map((work,index)=>(
                    <div key={index} className='hover:scale-105 duration-500 transition-all cursor-pointer'>

                      <img src={work.image} alt="" className='w-full rounded-xl '/>

                      <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>

                      <p className=' text-sm opacity-60 w-5/6 mx-auto'>{work.description}</p>

                    </div>
                    
                  ))
                }

              </div>
              
    </div>
  )
}

export default OurWork