import React from "react";

const CardYears = (props) => {

    const years = props.years
    const degree = props.degree
    const university = props.university
    const description = props.description

  return (
    <div>
      <div className="item">
        <div className="resume-item active">
          <div className="date">{years}</div>
          <div className="name">
            {degree} <br />
            {university}
            <div className="single-post-text">
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardYears;
