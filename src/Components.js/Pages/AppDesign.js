import ContentItem from "../ContentItem"
import HeroDesign from "../HeroDesign"
import airfilter from "../../assets/app-design/desktop/image-airfilter.jpg"
import eyecam from "../../assets/app-design/desktop/image-eyecam.jpg"
import faceit from "../../assets/app-design/desktop/image-faceit.jpg"
import todo from "../../assets/app-design/desktop/image-todo.jpg"
import loopstudios from "../../assets/app-design/desktop/image-loopstudios.jpg"
import PageLinkButton from "../PageLinkButton"

const AppDesign = ( {hamburger} ) => {
    return (
        <div className={hamburger === false ? "row" : "row blurry"}>
            <HeroDesign h1="App Design" p="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." />
            <div className="content">
                <ContentItem img={airfilter} h2="AIRFILTER" p="Solving the problem of poor indoor air quality by filtering the air"/>
                <ContentItem img={eyecam} h2="EYECAM" p="Product that lets you edit your favorite photos and videos at any time"/>
                <ContentItem img={faceit} h2="FACEIT" p="Get to meet your favorite internet superstar with the faceit app"/>
                <ContentItem img={todo} h2="TODO" p="A todo app that features cloud sync with light and dark mode"/>
                <ContentItem img={loopstudios} h2="LOOPSTUDIOS" p="A VR experience app made for Loopstudios"/>
            </div>
            <div className="center-project">
                <PageLinkButton page="/webdesign" h1="WEB DESIGN" c="btn project-btn project-btn-first" />
                <PageLinkButton page="/graphicdesign" h1="GRAPHIC DESIGN" c="btn project-btn project-btn-third" />
            </div>
        </div>
    )
}

export default AppDesign