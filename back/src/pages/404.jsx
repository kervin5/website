import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import PageSection from "../components/Layout/PageSection"
import Padding from "../components/Layout/Padding"
import Header from "../components/UI/Header"
import Highlight from "../components/UI/Highlight"
import Envelope from "../images/SVGComponents/Envelope"
import Button from "../components/UI/Button"

const BlogPage = () => {
  return (
    <Layout>
      <SEO
        title="404: Not found"
        description="Pagina no encontrada, este es un blog sobre JavaScript, HTML, CSS, React y muchos otros temas relacionados al desarrollo web. Es un espacio para seguir creciendo como desarrollador"
      />

      <PageSection splat="right" id="contact">
        <Grid>
          <Row middle="xs">
            <Col xs={12} md={6}>
              <Padding>
                <Header>
                  <Highlight>404</Highlight> | NOT FOUND
                </Header>
                <p>
                  You just hit a route that doesn&#39;t exist... the sadness.
                </p>
                <Button as="a" href="/">
                  Go Home
                </Button>
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
}

export default BlogPage
