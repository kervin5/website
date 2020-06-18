import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import PageSection from "../components/layout/PageSection"
import Padding from "../components/layout/Padding"
import HTag from "../components/ui/htag"
import Highlight from "../components/ui/Highlight"
import Envelope from "../images/svgComponents/envelope"
import Button from "../components/ui/Button"

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
                <HTag>
                  <Highlight>404</Highlight> | NOT FOUND
                </HTag>
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
