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
          <div className="owl-carousel">
            <CardYears
              years="2015-2016"
              degree="Frontend Developer"
              university="VSHWAN, Ahmedabad"
              description="Working as a Frontend Developer."
            />

            <CardYears
              years="2021"
              degree="Higher Secondary"
              university="Kendriya Vidyalaya Sangathan(KVS)"
              description="Etiam sit amet orci eget eros faucibus tincidunt. Duis
                        leo. Sed fringilla mauris sit amet nibh. Donec sodales
                        sagittis magna."
            />

            <CardYears
              years="2016-2019"
              degree="Bachelor of Computer Applications (B.C.A)"
              university="Ganpat University"
              description="Etiam sit amet orci eget eros faucibus tincidunt. Duis
                        leo. Sed fringilla mauris sit amet nibh. Donec sodales
                        sagittis magna."
            />

            <CardYears
              years="2019-2021"
              degree="Master of Computer Applications (M.C.A)"
              university="Ganpat University"
              description="Etiam sit amet orci eget eros faucibus tincidunt. Duis
                        leo. Sed fringilla mauris sit amet nibh. Donec sodales
                        sagittis magna."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience