import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import DevicesImages from "../components/images/DevicesImages"
import Button from "../components/ui/Button"
import PageSection from "../components/layout/PageSection"
import Padding from "../components/layout/Padding"
import HTag from "../components/ui/htag"
import Highlight from "../components/ui/Highlight"
import Logo from "../components/svg/logo"
import PersonIllustration from "../components/svg/person"
import Envelope from "../components/svg/envelope"
import SocialLinks from "../components/navigation/SocialLinks"
import TopThreePosts from "../components/blog/topThreePosts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageSection splat id="home">
      <Grid>
        <Row middle="xs" center="xs">
          <Col xs={12} md={6}>
            <Logo />
          </Col>
          <Col xs={12} md={6}>
            <HTag nomargin>
              Kervin <Highlight>Vasquez</Highlight>
            </HTag>

            <HTag as="h2" weight="300">
              Full-Stack Developer
              <SocialLinks />
            </HTag>
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection splat="left" id="aboutMe">
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
    <PageSection splat id="services">
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
    <PageSection splat="left" id="projects">
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
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection splat="left" id="contact">
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={6}>
            <Padding>
              <HTag>
                Let's <Highlight>talk</Highlight>
              </HTag>
              <p>
                Maybe you need a web site, or perhaps you're looking for an
                experienced full-stack developer to join your team or to
                collaborate in a project or event. Maybe there's a secret that
                no one can ever know{" "}
                <span role="img" aria-label="scared emoji">
                  😨
                </span>
                , or you simply have a question regarding my services. Whatever
                the reason may be, feel free to{" "}
                <a href="mailto:kervinlvh@gmail.com">drop me a line</a>.
              </p>
              <SocialLinks />
            </Padding>
          </Col>
          <Col xs={12} md={6}>
            <Envelope />
          </Col>
        </Row>
      </Grid>
    </PageSection>
  </Layout>
)

export default IndexPage
