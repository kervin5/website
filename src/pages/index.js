import React from "react"
import { Link } from "gatsby"
import { Grid, Row, Col } from "react-flexbox-grid"

import Layout from "../components/layout"
import DevicesImages from "../components/images/DevicesImages"
import HTag from "../components/htag"
import SEO from "../components/seo"

import PageSection from "../components/layout/PageSection"
import Logo from "../components/svg/logo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageSection splat>
      <Grid>
        <Row middle="xs">
          <Col xs={6} md={6}>
            <HTag nomargin>Kervin Vasquez</HTag>
            <HTag as="h2" weight="300">
              Full-Stack Developer
            </HTag>
          </Col>
          <Col xs={6} md={6}>
            <Logo />
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection splat>
      <Grid>
        <Row middle="xs">
          <Col xs={6} md={6}>
            <p>
              I'm a web developer based in Los Angeles passionate for creating
              robust yet user friendly solutions. Writing{" "}
              <strong>reusable, scalable, testable, and efficient</strong>{" "}
              software with <strong>Javascript and PHP</strong> is what I do
              best.
            </p>
            <p>
              Hi! 😁 my name is Kervin and I’m a full-stack web developer based
              in Los Angeles. I'm passionate about movies, technology and
              basically everything that makes the internet tick.{" "}
            </p>
            <p>
              I currently work as a full-time web developer 💻 at a fast-growing
              staffing agency as well as managing ongoing freelance side
              projects. I find this combination to be super resourceful in terms
              of my self-improvement process as a web developer, as well as for
              keeping up with the rapid expansion of developer tools, libraries,
              frameworks (😨Javascript), etc.{" "}
            </p>
          </Col>
          <Col xs={6} md={6}>
            <DevicesImages />
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
