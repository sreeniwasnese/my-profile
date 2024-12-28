import React from 'react'
import { motion } from 'framer-motion'

import Heading from './sub/Heading'
import { pricingPlans, checkIcon } from '@/assets'



const PricingPlans = () => {

  return (
    <div className='py-20 px-96'>
        <Heading text={"Pricing Plans"} />

        <div className='h-full flex lg:flex-col items-center justify-between gap-8'>

                {
                    pricingPlans.map((plan, i) => (
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, delay: i * 0.2, scale: { duration: 0.15 } }}
                            key={i} 
                            className={`sm:w-[270px] flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600 ${i === 1 ? "w-[370px] xl:w-[320px] bg-white" : "w-[350px] xl:w-[300px] bg-zinc-50"}`}
                        >
                            <h1 className='text-3xl lg:text-lg font-light tracking-wide text-center'>{plan.title}</h1>
                            <span className='text-2xl lg:text-xl text-center'>{plan.pricing}</span>

                            <ul className='flex flex-col gap-y-2'>
                                {
                                    plan.features.map((feature, j) => (
                                        <div 
                                            className="flex items-center gap-x-3" 
                                            key={j}
                                        >
                                            <span className={`text-2xl ${i === 1 ? "text-red-300" : "text-yellow-500"}`}>{checkIcon}</span>
                                            <li className='text-[15px] font-light tracking-wide'>{feature}</li>
                                        </div>
                                    ))
                                }
                            </ul>

                            <p className='text-sm font-light  text-center'>
                                <span className='font-semibold'>Ideal For: </span> {plan.recommended}
                            </p>
                        </motion.div>

                    ))
                }

        </div>
    </div>
  )
}

export default PricingPlans