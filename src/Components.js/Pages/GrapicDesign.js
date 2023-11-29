import ContentItem from "../ContentItem"
import HeroDesign from "../HeroDesign"
import airfilter from "../../assets/app-design/desktop/image-airfilter.jpg"
import eyecam from "../../assets/app-design/desktop/image-eyecam.jpg"
import faceit from "../../assets/app-design/desktop/image-faceit.jpg"
import todo from "../../assets/app-design/desktop/image-todo.jpg"
import loopstudios from "../../assets/app-design/desktop/image-loopstudios.jpg"
import PageLinkButton from "../PageLinkButton"

const GraphicDesign = ( {hamburger} ) => {
    return (
        <div className={hamburger === false ? "row" : "row blurry"}>
            <HeroDesign h1="Graphic Design" p="We deliver eye-catching branding materials that are tailored to meet your business objectives." />
            <div className="content">
                <ContentItem img={airfilter} h2="TIM BROWN" p="A book cover designed for Tim Brown’s new release, ‘Change’"/>
                <ContentItem img={eyecam} h2="BOXED WATER" p="A simple packaging concept made for Boxed Water"/>
                <ContentItem img={faceit} h2="SCIENCE!" p="A poster made in collaboration with the Federal Art Project"/>
            </div>
            <div>
                <PageLinkButton page="/webdesign" h1="WEB DESIGN" c="btn project-btn project-btn-first" />
                <PageLinkButton page="/app" h1="APP DESIGN" c="btn project-btn project-btn-third" />
            </div>
        </div>
    )
}

export default GraphicDesign