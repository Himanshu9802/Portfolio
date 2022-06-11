import React from 'react'

const Features = (props) => {
    const icon = props.techIcon;
    const title = props.techName;
    const progress = props.techPercent;
  
    return (
      <div className="codingCard">
        <img src={icon} alt="" height={70} />
        <div className="name">{title}</div>
        <div class="single-post-text">
          <div>
            <p>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh.
            </p>
          </div>
        </div>
        <div className="progress">
          <div className="percentage" style={{ width: `${progress}%` }}>
            <span className="percent">{`${progress} %`}</span>
          </div>
        </div>
      </div>
    );
}

export default Features