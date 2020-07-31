import React, { useState, useEffect } from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PageSection from "../components/layout/PageSection"
import Padding from "../components/layout/Padding"
import HTag from "../components/ui/htag"
import HeroTitle from "../components/layout/HeroSection"

const IndexPage = () => {
  const [points, setPoints] = useState(100)

  useEffect(() => {
    const decreaseTimeout = setInterval(() => {
      if (points > -30) {
        setPoints(points - 1)
      }
    }, [300])

    return () => {
      clearInterval(decreaseTimeout)
    }
  }, [points])

  return (
    <Layout>
      <SEO title="Home" image="seo.PNG" />
      <PageSection id="home">
        <HeroTitle firstLine="Michelle" secondLine="Reyes" />
      </PageSection>
      <PageSection id="aboutMe" color="mainColor" skew>
        <Grid>
          <Row middle="xs">
            <Col xs={12} md={6}>
              <Padding>
                <HTag>Comments🤔</HTag>
                <p>
                  She's a really <strong>mean</strong> lady who tries to take
                  vacations during school hours and who creates her own rules.
                  <span role="img" aria-label="smiling emoji">
                    🙀😈
                  </span>
                  .
                </p>
                <h2 style={{ color: "green" }}>Initial Points: 100</h2>
                <ul>
                  <li>-30 for being mean</li>
                  <li>-20 for not completing the second challenge</li>
                  <li>-30 for replying in spanish during school hours</li>
                  <li>-50 for trying to set her own vaction policy</li>
                </ul>
                <h2 style={{ color: "red" }}>Total Points: -30</h2>
              </Padding>
            </Col>
            <Col xs={12} md={6}>
              <h1
                style={{
                  fontSize: "6rem",
                  color: points >= 10 ? "blue" : "red",
                }}
              >
                {points} Points
              </h1>
            </Col>
          </Row>
        </Grid>
      </PageSection>
    </Layout>
  )
}

export default IndexPage
