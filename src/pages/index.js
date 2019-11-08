import React from "react"
import { Link } from "gatsby"
import { Grid, Row, Col } from "react-flexbox-grid"

import Layout from "../components/layout"
import DevicesImages from "../components/images/DevicesImages"
import HTag from "../components/htag"
import SEO from "../components/seo"

import PageSection from "../components/layout/PageSection"
import Padding from "../components/layout/Padding"
import Logo from "../components/svg/logo"
import PersonIllustration from "../components/svg/person"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageSection splat>
      <Grid>
        <Row middle="xs" center="xs">
          <Col xs={12} md={6}>
            <Logo />
          </Col>
          <Col xs={12} md={6}>
            <HTag nomargin>Kervin Vasquez</HTag>
            <HTag as="h2" weight="300">
              Full-Stack Developer
            </HTag>
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection splat="left">
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={6}>
            <Padding>
              <p>
                I'm a web developer based in Los Angeles, passionate for
                creating robust yet user friendly solutions. Writing{" "}
                <strong>reusable, scalable, testable, and efficient</strong>{" "}
                software with <strong>Javascript and PHP</strong> is what I do
                best 😁.
              </p>
              <p>
                I love movies, technology, good music, memes and basically
                everything that makes the internet tick. I'm currently working
                as a full-time web developer 💻 but I also have fun managing
                ongoing freelance projects.{" "}
              </p>
            </Padding>
          </Col>
          <Col xs={12} md={6}>
            <PersonIllustration />
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection splat>
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={6}>
            <Padding>
              <p>
                If you're a business owner looking to get started on a project
                with a freelance web developer, a developer looking to
                collaborate on something cool, or just want to say hi, shoot me
                a message and let's work together.
              </p>

              <p>
                I specialize in the development of static sites, UI/UX
                development, Wordpress development & MERN applications.
              </p>
            </Padding>
          </Col>
          <Col xs={12} md={6}>
            <DevicesImages />
          </Col>
        </Row>
      </Grid>
    </PageSection>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
