import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>Advanced Java Training</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;June 2024 - Dec 2024</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Acquired skills in Java, Hibernate, MySQL, and CLI application development through an extensive 6-month training program, building a solid foundation in back-end technologies.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Developed a digital bookstore system, integrating Java programming, Hibernate ORM, and MySQL, managing over 100 books</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Strengthened expertise in OOP, DBMS, and CLI tools, contributing to 100% efficiency in application performance during user testing.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>Hoping Minds</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;07/01/2023 - 07/07/2023</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Implemented state management techniques (e.g., Redux, MobX) to maintain data consistency across an application with over 50 components, reducing rendering time by 30% and enhancing reliability.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Leveraged Git to manage over 200 code commits and collaborated with a team of 5 developers, reducing merge conflicts by 40% and ensuring timely project delivery.</span>
                                    </li>
                                </ul>
                            </div>

                            {/*  You can put this repeated code as a child component similar to internship.js  
                            <div className="experience__box">
                                <h2>XYZ Pvt Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/06/2022 - PRESENT</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Developing multiple highly responsive and adaptive website using React and Vue</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset="-5000">
                                        <span>Developing new user-facing features</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600' data-aos-offset="-5000">
                                        <span>Building reusable code</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800' data-aos-offset="-5000">
                                        <span>Add few more lines...</span>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience