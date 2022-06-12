import React from 'react'
import CardYears from "../reusables/CardwithYears/CardYears";

const Experience = () => {
  return (
    <div className="section resume" id="Resume">
      <div className="content">
        {/* <!-- title --> */}
        <div className="titles">
          <div className="title">Experience</div>
          <div className="subtitle">Worked with</div>
        </div>

        {/* <!-- education items --> */}
        <div className="content-carousel">
          <div className="owl-carousel education-date">
            <CardYears
              years="Current"
              degree="Frontend Developer"
              university="VSHWAN, Ahmedabad"
              description="Working as a Frontend Developer."
            />

            <CardYears
              years="2021"
              degree="Web Developer (Intern)"
              university="Way To Web Pvt. Ltd., Ahmedabad"
              description="Completed 6 Months Internship."
            />

            <CardYears
              years="2015"
              degree="Wordpress Developer Intern"
              university="Codepoets, Ahmedabad"
              description="Worked as a Jr. Wordpress Developer."
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience