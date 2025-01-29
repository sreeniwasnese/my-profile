"use client";

import { useState, useRef, useEffect } from "react";
import { animate, motion } from "framer-motion";

import { projectsData, projectsButton } from "@/assets";

import Heading from "./sub/Heading";
import Project from "./sub/Project";



const Projects = () => {

    const [tech, setTech] = useState('All')
    const [index, setIndex] = useState(0)

    const preIndex = useRef(0)
    const buttonRef = useRef([])

    const handleClick = () => {
        animate(
            buttonRef.current[preIndex.current],
            { opacity: 0.5, scale: 1 },
        )
        animate(
            buttonRef.current[index],
            { opacity: 1, scale: 1.2 }
        ) 
    }

    useEffect(() => {
        handleClick()
        preIndex.current = index
    },[index])
    
  return (
    <div className="min-h-screen py-20 px-80" id="projects">
      <Heading text={'Projects'} />

      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
          {
              projectsButton.map((text, i) => (
                <motion.button
                    key={i}
                    ref={el => buttonRef.current.push(el)}
                    onClick={() => {
                        setTech(text)
                        setIndex(i)
                    }}
                    className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"

                    initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 :1 }}
                >
                    {text}
                </motion.button>
              ))
          }            
      </div>

      <div
        className="flex flex-wrap items-center justify-center gap-5"
      >
        {
            projectsData
            .filter((project) => {
                return project.tech.some(item => ( tech === 'All' ? true : item === tech ))
            })
            .map((data, i) => (
                <motion.div 
                    key={`id-${i}`}
                    layout
                >
                    <Project data={data} index={i} />
                </motion.div>
            ))
        }
      </div>
    </div>
  )
}

export default Projects