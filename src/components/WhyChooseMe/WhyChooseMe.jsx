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
        <div class="Cardcontainer">
          <div class="choosecard">
            <h3 class="choosetitle">Satisfaction</h3>
            <div className="cardFeature">
                <img src={'images/satisfaction.gif'} height={80} width={80} />
            </div>
            <div style={{padding:20,textAlign:'justify'}}>
                I want you to be completely satisfied with my services. I will do whatever it takes to make you happy. No hassles, no problems.
            </div>
          </div>
          <div class="choosecard">
            <h3 class="choosetitle">Budget Friendly</h3>
            <div className="cardFeature">
                <img src={'images/budgetFriendly.gif'} height={100} width={100} />
            </div>
            <div style={{padding:20,paddingTop:0,textAlign:'justify'}}>
                I want you to be completely satisfied with my services. I will do whatever it takes to make you happy. No hassles, no problems.
            </div>
          </div>
          <div class="choosecard">
            <h3 class="choosetitle">Responsive</h3>
            <div className="cardFeature">
                <img src={'images/responsive.gif'} height={100} width={100} />
            </div>
            <div style={{padding:20,textAlign:'justify'}}>
                I want you to be completely satisfied with my services. I will do whatever it takes to make you happy. No hassles, no problems.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
