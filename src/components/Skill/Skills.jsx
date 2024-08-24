import React from "react";
import  './skills.css';
import UiSDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills =()=>{
    return (
        <section id='skills'>
          <span className="skillTitle">What I do</span>
          <span className="skillDes">I am a skilled and passionate web Devloper with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and keen a detail.i am proficient in HTML,CSS,JavaScript and React as well as design software.</span>
            <div className="skillBars">
            <div className="skillBar">
                <img src={UiSDesign} alt="UiDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is Demo text, you can write your own content here </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is Demo text, you can write your own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is Demo text, you can write your own content here</p>
                </div>
            </div>
            </div>
        
        </section>
    )
}
export default Skills;