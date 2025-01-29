"use client"

import { useEffect, useRef, useState } from "react"

import Navbar from "@/components/Navbar"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "../components/Experience"
import Skills from "@/components/Skills"
import Reviews from "@/components/Reviews"
import Projects from "@/components/Projects"
import PricingPlans from "@/components/PricingPlans"
import Form from "@/components/Form"
import Questions from "../components/Questions"


const Home = () => {

  const [id, setId] = useState(0)
  const componentsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        if(intersecting) {
          setId(entry.target.id)
        }
      })
    }, { threshold: 0.3 })

    const componentsArr = Array.from(componentsRef.current.children)
    componentsArr.forEach(component => {
      observer.observe(component)
    })
  }, [])
  
  return (
    <>
      <Navbar id={id} />
        <div ref={componentsRef}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Reviews />
          <Projects />
          <PricingPlans />
          <Form />
          <Questions />
        </div>
    </>
  )
}

export default Home