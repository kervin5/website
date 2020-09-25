import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import DevicesImages from "../images/DevicesImages"
import Button from "../components/UI/Button"
import PageSection from "../components/Layout/PageSection"
import Padding from "../components/Layout/Padding"
import Header from "../components/UI/Header"
import Highlight from "../components/UI/Highlight"
// import Logo from "../images/svgComponents/logo"
import PersonIllustration from "../images/SvgComponents/person"

import SocialLinks from "../components/Navigation/SocialLinks"
import TopThreePosts from "../components/Blog/TopThreePosts"
import ContactInfo from "../components/UI/ContactInfo"
import HeroSection from "../components/Layout/HeroSection"
// import Skew from "../components/Animation/Skew"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" image="seo.PNG" />
    <PageSection id="home">
      {/* <Grid>
        <Row middle="xs" center="xs">
          <Col xs={12} md={6}>
            <Logo />
          </Col>
          <Col xs={12} md={6}> */}
      <HeroSection firstLine="Kervin" secondLine="Web Developer">
        <span />
      </HeroSection>
      {/* <h2>Fullstack Developer</h2> */}
      {/* <SocialLinks /> */}
      {/* <Header nomargin>
              Kervin <Highlight>Vasquez</Highlight>
            </Header>

            <Header as="h2" weight="300">
              Full-Stack Developer
              
            </Header> */}
      {/* </Col>
        </Row>
      </Grid> */}
    </PageSection>
    <PageSection id="aboutMe" skew>
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={6}>
            <Padding>
              <Header>
                About <Highlight>Me</Highlight>
              </Header>
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
    <PageSection id="services" skew>
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={6}>
            <Padding>
              <Header>Services</Header>
              <p>
                Whether you're a business owner looking to get started on a
                project with a freelance web developer, a developer looking to
                collaborate on something cool, or just want to say hi, shoot me
                a message and let's work together.
              </p>

              <p>
                I specialize in the development of static sites, UI/UX
                development, Javascript web applications and Wordpress
                development.
              </p>
            </Padding>
          </Col>
          <Col xs={12} md={6}>
            <DevicesImages />
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection id="projects" skew>
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={6}>
            <Padding>
              <Header>Projects</Header>
              <p>
                These are some of the projects that I've been working on. Most
                of them are things that I've built just for fun or to learn
                something new, but you will also find some production
                applications, javascript libraries and more. Feel free to fork
                whatever you find interesting{" "}
                <span role="img" aria-label="smiling emoji">
                  😁
                </span>
                .
              </p>
            </Padding>
          </Col>
          <Col xs={12} md={6}>
            <Header as="h2">
              Coming soon...
              <span role="img" aria-label="open eyes emoji">
                👀
              </span>
            </Header>
            <Header as="h3">
              Checkout my <a href="https://github.com/kervin5">Github</a>
            </Header>
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection id="blog">
      <Grid>
        <Row middle="xs" center="xs">
          <Col xs={12}>
            <Padding>
              <Header center>Blog</Header>
              <p>
                Did you know that I have a blog in Spanish{" "}
                <span role="img" aria-label="surprised emoji">
                  😲
                </span>
                ? Take a look at some of my most recent posts. Y si encuentras
                algo interesante no olvides compartilo con otros estare
                escribiendo sobre todo tipo de temas relacionados al desarrollo
                web!
              </p>
            </Padding>
          </Col>
          <Col xs={12}>
            <TopThreePosts />
            <Button href="/blog" as="a">
              Ver Más
            </Button>
            <br />
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection id="contact">
      <ContactInfo />
    </PageSection>
  </Layout>
)

export default IndexPage
