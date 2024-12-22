"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, animate } from "framer-motion"

import Heading from "./sub/Heading"
import { reviewsData, starIcons, arrowIcons } from "@/assets"


const Reviews = () => {

    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(false)
    const preIndex = useRef(0)
    const slide = useRef([])

    const rClickHandler = () => {
        animate(slide.current[index], {x: 0}, {delay: 0.3})
        animate(slide.current[preIndex.current], {
            scale: index === 0 ? 1 : .4,
            rotate: index === 0 ? 0 : (index % 2 === 0 ? 10 : -10)
        })
    }

    const lClickHandler = () => {
        animate(
            slide.current[index], 
            { scale: 1, rotate: 0 },
            { delay: 0.2 }
        )
        animate(
            slide.current[preIndex.current],
            { x: '100%' }
        )
    }

    useEffect(() => {
        direction ? lClickHandler() : rClickHandler()
        preIndex.current = index
    }, [index])

  return (
    <div className="my-20 px-96">
        <Heading text={"Reviews"} />

        <div className="flex flex-col items-center justify-center">
            <motion.div 
                className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                {
                    reviewsData.map((review, i) => (
                            <motion.div 
                                className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl"
                                key={i}
                                ref={el => slide.current.push(el)}
                                initial={{ x: '100%' }}
                            >
                                <Image 
                                    src={review.image}
                                    alt={review.name}
                                    height={130}
                                    width={130}
                                    className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
                                />
                                
                                <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">{review.name}</h1>
                                <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-3">
                                    {review.comment}
                                </p>

                                <div className="flex flex-col items-center justify-center gap-y-2">
                                    <span className="text-lg font-light text-yellow-600 mr-3">{review.stars.reduce((sum, item) => sum += item, 0).toFixed(1)}</span>
                                    <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                                            {
                                                review.stars.map((star, i) => (
                                                    <span key={i}>
                                                        {star === 1 ? starIcons[0] : starIcons[1]}
                                                    </span>
                                                ))
                                            }
                                    </div>
                                </div>
                            </motion.div>
                    ))
                }
            </motion.div>

            <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
                <button 
                    className={`${index === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100 pointer-events-auto'} hover:scale-150 transition-all`}
                    onClick={() => {
                        setDirection(true)
                        setIndex(index - 1)
                    }}
                    > {arrowIcons[0]} </button>
                <button 
                    className={`${index === reviewsData.length-1 ? 'opacity-30 pointer-events-none' : 'opacity-100 pointer-events-auto'} hover:scale-150 transition-all`}
                    onClick={() => {
                        setDirection(false)
                        setIndex(index + 1)
                    }}
                >{arrowIcons[1]}</button>
            </div>
        </div>
    </div>
  )
}

export default Reviews