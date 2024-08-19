import React from "react";
import "./about.css";
import AboutI from "../../assets/avatar-2.png";
import AboutBox from "./AboutBox"; 

const About = ()=> {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={AboutI} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        I am a first-year student pursuing Computer Engineering at the National School of Engineers of Carthage (ENICarthage). Driven by a passion for technology and a curiosity for innovation, I am constantly exploring various aspects of computer science, from programming to software development. Through my studies and projects, I strive to blend creativity with technical rigor to tackle complex problems and deliver innovative solutions.
                        </p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Web Development-HTML/CSS/JS-React.js</h3>
                                <span className="skills__number ">74%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">58%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage python"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">C/C++</h3>
                                <span className="skills__number">98%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage cpp"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"> Database Management-SQL/SQLite</h3>
                                <span className="skills__number">64%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage sql"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"> Modeling-UML</h3>
                                <span className="skills__number">79%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage uml"></span>
                            </div>
                        </div>


                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"> Content Creation</h3>
                                <span className="skills__number">64%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage creation"></span>
                            </div>
                        </div>


                

                    </div>

                </div>
            </div>

            <AboutBox/>
        </section>
    )
}
export default About