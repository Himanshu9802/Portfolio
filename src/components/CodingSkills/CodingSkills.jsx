import React from "react";
import LinedProgress from "../reusables/LinedProgress/LinedProgress";

const CodingSkills = () => {
  return (
    <div className="section skills" id="Coding">
      <div className="content">
        {/* <!-- title --> */}
        <div className="titles">
          <div className="title">Coding Skills</div>
          <div className="subtitle">Developing on</div>
        </div>

        {/* <!-- skills items --> */}

        <div className="skills percent">
          <ul>
            <li>
              <LinedProgress
                techIcon="images/html.png"
                techName="HTML 5"
                techPercent="99"
              />
            </li>
            <li>
              <LinedProgress
                techIcon="images/css.png"
                techName="CSS 3"
                techPercent="99"
              />
            </li>
            <li>
              <LinedProgress
                techIcon="images/bootstrap.png"
                techName="Bootstrap"
                techPercent="99"
              />
            </li>
            <li>
              <LinedProgress
                techIcon="images/js.png"
                techName="JS"
                techPercent="70"
              />
            </li>
            <li>
              <LinedProgress
                techIcon="images/react.png"
                techName="React"
                techPercent="50"
              />
            </li>
            <li>
              <LinedProgress
                techIcon="images/wordpress.png"
                techName="Wordpress"
                techPercent="85"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CodingSkills;
