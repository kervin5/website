import React from "react"
import PageSection from "../../Layout/PageSection"
import HeroSection from "./HeroSection"
import HeroLinks from "./HeroLinks"
import ShapesBackground from "../../../images/SVGComponents/ShapesBakground"
import Header from "../../UI/Header"
// import SocialLinks from "../components/Navigation/SocialLinks"

const LandingPage = () => {
  return (
    <PageSection id="home">
      <HeroSection firstLine="Kervin" secondLine="Web Developer">
        <Header as="h2">Web Developer</Header>
        <HeroLinks />
      </HeroSection>
      <ShapesBackground />
    </PageSection>
  )
}

export default LandingPage
