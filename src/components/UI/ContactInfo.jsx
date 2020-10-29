import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import Padding from "../Layout/Padding"
import Header from "./Header"
import Envelope from "../../images/SVGComponents/Envelope"
import Highlight from "./Highlight"
import SocialLinks from "../Navigation/SocialLinks"

const contactInfo = () => {
  return (
    <Grid>
      <Row middle="xs">
        <Col xs={12} md={6}>
          <Padding>
            <Header decoration>
              Let's <Highlight>talk</Highlight>
            </Header>
            <p>
              Maybe you need a web site, or perhaps you're looking for an
              experienced full-stack developer to join your team or to
              collaborate in a project or event. Maybe there's a secret that no
              one can ever know{" "}
              <span role="img" aria-label="scared emoji">
                😨
              </span>
              , or you simply have a question regarding my services. Whatever
              the reason may be, feel free to{" "}
              <a href="mailto:contact@kervin.tech">drop me a line</a>.
            </p>
            <SocialLinks />
          </Padding>
        </Col>
        <Col xs={12} md={6}>
          <Envelope />
        </Col>
      </Row>
    </Grid>
  )
}

export default contactInfo
