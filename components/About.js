const About = () => {
    return (
        <div className="section about section_" id="section-resume">
            <div className="content">
                <div className="title">
                    <div className="title_inner">About Me</div>
                </div>
                <div className="image">
                    <img src="images/man1.jpg" alt="" />
                </div>
                <div className="desc">
                    <p>
                        I enjoy being challenged and engaging with projects that
                        require me to work outside my comfort zone and knowledge
                        set. My past work experiences as an audio-visual
                        technician required me to continuously adapt and evolve
                        depending on client demands and unforeseen situations. I
                        assembled, managed, and troubleshot incredibly large and
                        intricate A/V systems. I thoroughly enjoyed
                        troubleshooting such complex systems and this practice
                        has carried over to coding. During my time at Bloomtech,
                        I collaborated remotely with various teams of developers
                        to construct web applications and solve problems. I
                        learned to follow the industry's best practices to
                        construct the most accessible, aesthetic, and
                        user-friendly websites possible.
                        <br></br>
                        <br></br>I believe in continuous improvement and being
                        curious about every project you work on. I like to spend
                        my free time working on projects and further developing
                        my skills. There's nothing more satisfying than solving
                        a good bug.
                    </p>
                    <div className="info-list">
                        <ul>
                            <li>
                                <strong>Name:</strong> Alex Pfeifer
                            </li>
                            <li>
                                <strong>Age:</strong> 32 Years
                            </li>
                            <li>
                                <strong>Job:</strong> Web Developer
                            </li>
                            <li>
                                <strong>Citizenship:</strong> Canada
                            </li>
                            <li>
                                <strong>Residence: </strong> Victoria, BC
                            </li>
                            <li>
                                <strong>E-mail:</strong> apfeif.12@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="bts">
                        <a
                            href="https://drive.google.com/file/d/1ofhxl9bHw72lP4Jhs-lYtvsW4QZYgckq/view?usp=drive_link"
                            className="btn fill"
                            data-text="Download CV">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="clear" />
            </div>
        </div>
    );
};
export default About;
