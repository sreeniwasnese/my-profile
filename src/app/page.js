"use client"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "../components/Experience"
import Skills from "@/components/Skills"
import Reviews from "@/components/Reviews"
import Projects from "@/components/Projects"
import PricingPlans from "@/components/PricingPlans"
import Form from "@/components/Form"


const Home = () => {
  
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
      <PricingPlans />
      <Form />
    </div>
  )
}

export default Home