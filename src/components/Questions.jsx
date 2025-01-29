"use client"

import { questions } from "@/assets"
import Heading from "./sub/Heading"
import Question from "./sub/Question"


const Questions = () => {

  return (
    <div className="py-20 px-96" id="questions">
        <Heading text={"Questions & Answers"} />

        <div>
            <ul className="flex flex-col gap-y-3">
                {
                    questions.map((question, i) => (
                        <Question key={i} data={question} index={i} />
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Questions