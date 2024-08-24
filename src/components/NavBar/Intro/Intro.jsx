import React from "react";
import './intro.css';
import {Link} from "react-scroll";
import btnImg from '../../../assets/hireme.png'

const Intro =()=>{
    return (
        <section id="intro">
            <div className="introContent">
                    <span className="hello">Hello </span>
                    <span className="introText">I'm <span className="introname">Anand</span><br /> Web Devloper</span>
                    <p className="intropara">I am a skilled web devloper with experience in creating <br /> visually appealing and user-friendly interface </p>
                    <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg" />Hire Me</button></Link>
                      
            </div>
            <img src="src/assets/image.png" alt="profile" className="bg" />
        </section>
    )
}
export default Intro;