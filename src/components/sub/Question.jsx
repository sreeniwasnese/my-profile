"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { QuestionArrow } from "@/assets"


const Question = ({ data, index }) => {

    const [show, setShow] = useState(false)
    const variants = {
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.07
            }
        }),
        hidden: { opacity: 0, x: -30 }
    }

  return (
    <motion.li 
        className="border border-yellow-500 p-1 rounded-lg"
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: '50px', once: true }}
        variants={variants}
    >
        <h1 
            onClick={() => setShow(pre => !pre)}
            className={`flex items-center text-xl font-extralight tracking-wide cursor-pointer text-gray-800 hover:text-yellow-600 
                ${show && "border-b text-yellow-600"}
            `}
        >
            <motion.span
                animate={{ rotate: show ? 180 : 0 }}
            >
                {QuestionArrow}
            </motion.span>
            <span>{data.question}</span>
        </h1>

        <motion.p
            initial={{ scaleY:0, height:0, opacity:0 }} 
            animate={{ scaleY:show ? 1 : 0, height:show ? 'auto' : 0, opacity:show ? 1 : 0 }}
            transition={{ duration: 0.1, type: 'spring', stiffness: show ? 250 : 50, opacity: { delay: show ? 0.2 : 0 } }}
            className="box-border origin-top pl-8 text-lg font-extralight tracking-wide text-gray-900 first-letter:pl-3"
        >
            {data.answer}
        </motion.p>
    </motion.li>
  )
}

export default Question