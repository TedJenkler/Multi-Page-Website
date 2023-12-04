import ContentItem from "../ContentItem"
import HeroDesign from "../HeroDesign"
import express from "../../assets/web-design/desktop/image-express.jpg"
import transfer from "../../assets/web-design/desktop/image-transfer.jpg"
import photon from "../../assets/web-design/desktop/image-photon.jpg"
import builder from "../../assets/web-design/desktop/image-builder.jpg"
import blogr from "../../assets/web-design/desktop/image-blogr.jpg"
import camp from "../../assets/web-design/desktop/image-camp.jpg"
import PageLinkButton from "../PageLinkButton"

const WebDesign = ({ hamburger }) => {
    return (
        <div className={hamburger === false ? "row" : "row blurry"}>
            <HeroDesign h1="Web Design" p="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />
            <div className="content">
                <ContentItem img={express} h2="EXPRESS" p="A multi-carrier shipping website for ecommerce businesses"/>
                <ContentItem img={transfer} h2="TRANSFER" p="Site for low-cost money transfers and sending money within seconds"/>
                <ContentItem img={photon} h2="PHOTON" p="A state-of-the-art music player with high-resolution audio and DSP effects"/>
                <ContentItem img={builder} h2="BUILDER" p="Connects users with local contractors based on their location"/>
                <ContentItem img={blogr} h2="BLOGR" p="Blogr is a platform for creating an online blog or publication"/>
                <ContentItem img={camp} h2="CAMP" p="Get expert training in coding, data, design, and digital marketing"/>
            </div>
            <div className="center-project">
                <PageLinkButton page="/app" h1="APP DESIGN" c="btn project-btn project-btn-second design-project" />
                <PageLinkButton page="/graphicdesign" h1="GRAPHIC DESIGN" c="btn project-btn project-btn-third design-project" />
            </div>
        </div>
    )
}

export default WebDesign