"use client";

export const CodingSkills = () => {
    const skills = [
        { id: 1, title: "React", value: 90 },
        { id: 2, title: "Javascript", value: 90 },
        { id: 3, title: "HTML / CSS", value: 85 },
        { id: 4, title: "GIT", value: 85 },
        { id: 5, title: "Wordpress", value: 80 },
    ];
    return (
        <div className="section skills">
            <div className="content">
                <div className="title">
                    <div className="title_inner">Coding Skills</div>
                </div>
                <div className="skills circles">
                    <ul>
                        {skills.map((skill) => (
                            <li key={skill.id}>
                                <div className="name">{skill.title}</div>
                                <div className={`progress p${skill.value}`}>
                                    <div
                                        className="percentage"
                                        style={{ width: `${skill.value}%` }}>
                                        <span className="percent">
                                            {skill.value}%
                                        </span>
                                    </div>
                                    <span>{skill.value}%</span>
                                    <div className="slice">
                                        <div className="bar" />
                                        <div className="fill" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export const Knowledge = () => {
    return (
        <div className="section skills">
            <div className="content">
                <div className="title">
                    <div className="title_inner">Knowledge</div>
                </div>
                <div className="skills list">
                    <ul>
                        <li>
                            <div className="name">Website hosting</div>
                        </li>
                        <li>
                            <div className="name">Project Management</div>
                        </li>
                        <li>
                            <div className="name">Microsoft Office</div>
                        </li>
                        <li>
                            <div className="name">Content Creation</div>
                        </li>
                        <li>
                            <div className="name">Website Design</div>
                        </li>
                        <li>
                            <div className="name">
                                Wordpress Management
                            </div>
                        </li>
                        <li>
                            <div className="name">Graphics and animations</div>
                        </li>
                        <li>
                            <div className="name">Search engine marketing</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

import { glitcheUtils } from "@/utility";
import { Fragment, useEffect } from "react";
const Skills = ({ coding = true, knowledge = true }) => {
    return (
        <Fragment>
            {coding && <CodingSkills />}
            {knowledge && <Knowledge />}
        </Fragment>
    );
};
export default Skills;
