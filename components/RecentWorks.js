"use client";
import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";
import Isotope from "isotope-layout";
import {
    Fragment,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

const galleryImages = {
    1: [
        "images/works/work1.jpg",
        "images/works/work2.jpg",
        "images/works/work3.jpg",
        "images/works/work4.jpg",
    ],
    2: [
        "images/works/work5.jpg",
        "images/works/work2.jpg",
        "images/works/work3.jpg",
        "images/works/work4.jpg",
    ],
};

const RecentWorks = () => {
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".portfolio-items", {
                itemSelector: ".box-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".box-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 1000);
    }, []);
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    const handleFilterKeyChange = useCallback(
        (key) => () => {
            setFilterKey(key);
        },
        []
    );

    const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

    const [activeGallaryImage, setActiveGallaryImage] = useState(1);
    const [gallery, setGallery] = useState(false);

    const { modalToggle, setPortfolioModal } = useContext(context);

    return (
        <Fragment>
            <FsLightbox
                toggler={gallery}
                sources={galleryImages[activeGallaryImage]}
            />
            <div className="section works section_" id="section-works">
                <div className="content">
                    <div className="title">
                        <div className="title_inner">Recent Works</div>
                    </div>
                    <div className="box-items portfolio-items">
                        <div className="box-item f-links">
                            <div className="image">
                                <a
                                    href="https://alexp-tell-me-a-joke.netlify.app/"
                                    className="has-popup-link"
                                    target="_blank">
                                    <img src="images/works/work1.jpg" alt />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <span className="ion ion-link" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Website</div>
                                <a
                                    href="https://alexp-tell-me-a-joke.netlify.app/"
                                    className="name has-popup-link">
                                    Click-For-A-Joke
                                </a>
                            </div>
                        </div>
                        <div className="box-item f-links">
                            <div className="image">
                                <a
                                    href="https://alexp-nasa-potd.netlify.app/"
                                    className="has-popup-link"
                                    target="_blank">
                                    <img src="images/works/work2.jpg" alt />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <span className="ion ion-link" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Website</div>
                                <a
                                    href="https://alexp-nasa-potd.netlify.app/"
                                    className="name has-popup-link">
                                    NASA Image of the Day
                                </a>
                            </div>
                        </div>
                        <div className="box-item f-links">
                            <div className="image">
                                <a
                                    href="https://hrfpolicetracker.vercel.app/"
                                    className="has-popup-link"
                                    target="_blank">
                                    <img src="images/works/work3.jpg" alt />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <span className="ion ion-link" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Website</div>
                                <a
                                    href="https://hrfpolicetracker.vercel.app/"
                                    className="name has-popup-link">
                                    Blue Witness by Human Rights First
                                </a>
                            </div>
                        </div>

                        <div className="box-item f-links">
                            <div className="image">
                                <a
                                    href="https://alexp-portfolio.netlify.app/"
                                    className="has-popup-link"
                                    target="_blank">
                                    <img src="images/works/work4.jpg" alt />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <span className="ion ion-link" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Website</div>
                                <a
                                    href="https://alexp-portfolio.netlify.app/"
                                    className="name has-popup-link">
                                    Portfolio 1.0
                                </a>
                            </div>
                        </div>
                        <div className="box-item f-links">
                            <div className="image">
                                <a
                                    href="https://my-portfolio-by-alex-pfeifer.netlify.app/"
                                    className="has-popup-link"
                                    target="_blank">
                                    <img src="images/works/work5.jpg" alt />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <span className="ion ion-link" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Website</div>
                                <a
                                    href="https://my-portfolio-by-alex-pfeifer.netlify.app/"
                                    className="name has-popup-link">
                                    Portfolio 2.0
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        </Fragment>
    );
};
export default RecentWorks;
