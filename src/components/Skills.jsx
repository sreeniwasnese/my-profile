"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import Heading from "./sub/Heading"
import { skillsData } from "@/assets"


const Skills = () => {

    const varients = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.07
            }
        }),
        hidden: {
            opacity: 0,
            y: 30
        }
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
        <Heading text={"Skills"} />

        <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
            {
                skillsData.map((item, i) => (
                    <motion.div 
                        key={i}
                        className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2" 
                        custom={i}
                        variants={varients}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.1 }}
                        viewport={{ margin: '50px', once: 'true' }}
                    >
                        <Image 
                            src={item.icon}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="h-auto w-[40px]"
                        />

                        <p className="text-sm text-gray-600">{item.name}</p>
                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills