import React from "react";
import Features from "../reusables/Features/Features";

const WhyChooseMe = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* <!-- title --> */}
        <div className="titles">
          <div className="title">Why Me?</div>
          <div className="subtitle">Working Factors</div>
        </div>
        <div className="Cardcontainer">
          <div className="choosecard">
            <h3 className="choosetitle">Satisfaction</h3>
            <div className="cardFeature">
                <img src={'images/satisfaction.gif'} height={80} width={80} />
            </div>
            <div style={{padding:20,textAlign:'justify'}}>
              I want you to be completely satisfied with the level of service I provide. I will do whatever it takes to achieve that. No hassles, no problems.
            </div>
          </div>
          <div className="choosecard">
            <h3 className="choosetitle">Budget Friendly</h3>
            <div className="cardFeature">
                <img src={'images/budgetFriendly.gif'} height={100} width={100} />
            </div>
            <div style={{padding:20,paddingTop:0,textAlign:'justify'}}>
              My prices are competitive and fair, but I'll always let you know if something comes up that we agree that you won't need to worry about it.
            </div>
          </div>
          <div className="choosecard">
            <h3 className="choosetitle">Responsive</h3>
            <div className="cardFeature">
                <img src={'images/responsive.gif'} height={100} width={100} />
            </div>
            <div style={{padding:20,paddingTop:0,textAlign:'justify'}}>
              I really try my best to make sure that I've created a design that looks good and isn't cramped up when viewed on smaller devices with smaller resolution.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
