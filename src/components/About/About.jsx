import React from 'react'
import "./about.scss"

const About = () => {
    return (
        <div className="about" id="about">
            <br />
            <h1 >About Me</h1>
            <hr style={{ width: 150, marginTop: "-25px", height: 3, backgroundColor: "#18d26e", border: "none" }} />
            <div className="aboutMain">
                <div className="aboutLeft">
                    <img src="animation1.gif" alt="" />
                </div>
                <div className="aboutRight">
                    <h1>I'm Pankaj, a <span style={{ color: "#18d26e" }}>Full Stack Web Developer</span></h1>
                    <p>Right from a young age, I was very interested in information, technology and computer science, So this passion led me to take my degree in Science, After that, I studied the English Language at Ramakrishna Mission School of Languages.</p>

                    <p>And I then took up a job in Teleperformance PVT LTD as customer support. I worked there for a period of three years but I didn't find the job satisfaction that one needed to love to work, so I started to look for a different career option.</p>

                    {/* <p>But I didn't had any proper guidance and knowledge at that time so After leaving my job, I started preparing myself for competitive exams and I am proud to say that I had cleared the SSC CGL tier-1 examination and SSC CHSL Tier-1 & Tier-2 examination, And Tier-3 was typing test. But my luck didn't favour me and I got my finger fractured and I missed the exam. And during my recovery period, And during my recovery period, </p> */}
                    <p>I come to know about Masai Coding School through a friend. And I realized that this is the perfect platform for me to build my career. So I joined Masai School in Dec 2021.</p>
                    <p>I completed my Full Stack Web Development in July 2022. And today I have the required Tech Skills for one to be a Full Stack Web Developer. I can code one page applications using front-end knowledge of React JS, Redux, TypeScript, HTML, CSS, and JavaScript and back-end using MongoDB, Express and node js.</p>
                    <p>I am very good at problem-solving. I am creative, observant, multitasking and a very good team player. I am also very good at time management.</p>
                    <p>And I am looking for a job opportunity in a technology-driven organization that could help me to showcase my technical skills to the best of my ability and that would also help me to enhance my career and my technical knowledge.</p>
                </div>
            </div>
        </div>
    )
}

export default About
