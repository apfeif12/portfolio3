"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactsInfo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitInfo = () => {
        // console.log(name + email + message);
        Swal.fire(
            "Thanks for your message",
            "I'll get back to you as soon as possible!",
            "success"
        );
        const emailContent = {
            name: name,
            email: email,
            message: message,
        };

        emailjs
            .send(
                "service_j5p251m",
                "template_vy5xs4j",
                emailContent,
                "EMF5btL-XtZ5N6dLe"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="section contacts section_" id="section-contacts">
            <div className="content">
                <div className="title">
                    <div className="title_inner">Contact Me</div>
                </div>
                <div className="service-items">
                    <div className="service-item">
                        <div className="icon">
                            <span className="ion ion-android-phone-portrait" />
                        </div>
                        <div className="name">Phone</div>
                        <p>(250)-826-4008</p>
                    </div>
                    <div className="service-item">
                        <div className="icon">
                            <span className="ion ion-email" />
                        </div>
                        <div className="name">Email</div>
                        <p>
                            <a>apfeif.12@gmail.com</a>
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="icon">
                            <span className="ion ion-ios-location" />
                        </div>
                        <div className="name">Location</div>
                        <p>Victoria, British Columbia</p>
                    </div>
                </div>
                <div className="contact_form">
                    <form id="cform" method="post">
                        <div className="group-val">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </div>
                        <div className="group-val">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>
                        <div className="group-val ct-gr">
                            <textarea
                                name="message"
                                placeholder="Message"
                                defaultValue={""}
                                onChange={(event) => {
                                    setMessage(event.target.value);
                                }}
                            />
                        </div>
                        <a
                            href="#"
                            className="btn fill"
                            data-text="Send Message"
                            onClick={submitInfo}>
                            Send Message
                        </a>
                    </form>
                    <div className="alert-success">
                        <p>
                            Thanks, your message is sent successfully. We will
                            contact you shortly!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactsInfo;
