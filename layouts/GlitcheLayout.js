import Popup from "@/components/popup/Popup";
import Footer from "@/layouts/Footer";
import { Fragment } from "react";
import OnePageHeader from "./OnePageHeader";
const GlitcheLayout = ({ children }) => {
    return (
        <Fragment>
            <Popup />
            <div className="container" style={{ margin: 0 }}>
                {<OnePageHeader />}
                <div className="wrapper">{children}</div>
                <Footer />
                <div className="line top" />
                <div className="line bottom" />
                <div className="line left" />
                <div className="line right" />
            </div>
        </Fragment>
    );
};
export default GlitcheLayout;
