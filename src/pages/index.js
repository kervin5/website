import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import Layout from "../components/layout/layout_"
import SEO from "../components/seo"
import DevicesImages from "../images/DevicesImages"
import Button from "../components/ui/Button"
import PageSection from "../components/layout/PageSection"
import Padding from "../components/layout/Padding"
import HTag from "../components/ui/htag"
import Highlight from "../components/ui/Highlight"
import Logo from "../images/svgComponents/logo"
import PersonIllustration from "../images/svgComponents/person"

import SocialLinks from "../components/navigation/SocialLinks"
import TopThreePosts from "../components/blog/topThreePosts"
import ContactInfo from "../components/ui/ContactInfo"
import HeroTitle from "../components/layout/HeroSection"
import Skew from "../components/animation/Skew"

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
      <HeroTitle firstLine="Kervin" />
      <SocialLinks />
      {/* <HTag nomargin>
              Kervin <Highlight>Vasquez</Highlight>
            </HTag>

            <HTag as="h2" weight="300">
              Full-Stack Developer
              
            </HTag> */}
      {/* </Col>
        </Row>
      </Grid> */}
    </PageSection>
    <PageSection id="aboutMe" skew>
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={6}>
            <Padding>
              <HTag>
                About <Highlight>Me</Highlight>
              </HTag>
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
              <HTag>Services</HTag>
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
              <HTag>Projects</HTag>
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
            <HTag as="h2">
              Coming soon...
              <span role="img" aria-label="open eyes emoji">
                👀
              </span>
            </HTag>
            <HTag as="h3">
              Checkout my <a href="https://github.com/kervin5">Github</a>
            </HTag>
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection id="blog">
      <Grid>
        <Row middle="xs" center="xs">
          <Col xs={12}>
            <Padding>
              <HTag center>Blog</HTag>
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
