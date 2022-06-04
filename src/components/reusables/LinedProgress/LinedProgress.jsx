import React from "react";

const LinedProgress = (props) => {

    const icon = props.techIcon
    const title = props.techName
    const progress = props.techPercent


  return (
    <div className="codingCard">
      <img src={icon} alt="" height={90} />
      <div className="name">{title}</div>
      <div className="progress">
        <div className="percentage" style={{ width: `${progress}%` }}>
          <span className="percent">{`${progress} %`}</span>
        </div>
      </div>
    </div>
  );
};

export default LinedProgress;
