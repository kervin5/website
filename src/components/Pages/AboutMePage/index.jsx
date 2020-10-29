import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import PageSection from "../../Layout/PageSection"
import Padding from "../../Layout/Padding"
import Header from "../../UI/Header"
// import Highlight from "../../UI/Highlight"
// import Logo from "../images/svgComponents/logo"
import PersonIllustration from "../../../images/SVGComponents/Person"

const AboutMePage = () => {
  return (
    <PageSection id="aboutMe" color="mutedBgColor" skew>
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={6}>
            <Padding>
              <Header decoration>About Me</Header>
              <p>
                I'm a web developer based in Los Angeles, passionate for
                creating robust yet user friendly solutions. Writing{" "}
                <strong>reusable, scalable, testable, and efficient</strong>{" "}
                software with <strong>Javascript and PHP</strong> is what I do
                best{" "}
                <span role="img" aria-label="smiling emoji">
                  😁
                </span>
                .
              </p>
              <p>
                I love movies, technology, good music, memes and basically
                everything that makes the internet tick. I'm currently working
                as a full-time web developer{" "}
                <span role="img" aria-label="laptop emoji">
                  💻
                </span>{" "}
                but I also have fun managing ongoing freelance projects.{" "}
              </p>
            </Padding>
          </Col>
          <Col xs={12} md={6}>
            <PersonIllustration />
          </Col>
        </Row>
      </Grid>
    </PageSection>
  )
}

export default AboutMePage
