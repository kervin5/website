import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import PageSection from "../components/Layout/PageSection"
import Padding from "../components/Layout/Padding"
import Header from "../components/UI/Header"
import Highlight from "../components/UI/Highlight"
import PostsGrid from "../components/Blog/PostsGrid"
import AllTags from "../components/Blog/Tags/AllTags"
import ContactInfo from "../components/UI/ContactInfo"
import SubscribeForm from "../components/Forms/SubscribeForm"

const TagsPage = (props) => {
  const { data, pageContext } = props
  const pageTag = pageContext.name

  return (
    <Layout>
      <SEO
        title={`Tag: ${pageTag} | Blog | JavaScript, CSS, HTML, React y más`}
        description={`Tag: ${pageTag} | Este es un blog sobre JavaScript, HTML, CSS, React y muchos otros temas relacionados al desarrollo web. Es un espacio para seguir creciendo como desarrollador`}
      />
      <PageSection splat id="home">
        <Grid>
          <Row middle="xs" center="xs">
            <Col xs={12}>
              <Header nomargin>{pageTag}</Header>
              <br />
              <AllTags />
            </Col>
          </Row>
        </Grid>
      </PageSection>
      <PageSection splat="left" id="aboutMe">
        <Grid>
          <Row middle="xs" center="xs">
            <Col xs={12}>
              <Padding>
                <Header>
                  Posts related to <Highlight>{pageTag}</Highlight>
                </Header>
              </Padding>
            </Col>
            <Col xs={12}>
              <PostsGrid showFeatured posts={data.allGhostPost.nodes} />
            </Col>
            <Col xs={12}>
              <SubscribeForm />
            </Col>
          </Row>
        </Grid>
      </PageSection>

      <PageSection splat="right" id="contact">
        <ContactInfo />
      </PageSection>
    </Layout>
  )
}

export default TagsPage

export const tagsPostsQuery = graphql`
  query TagsPostsQuery($slug: String!) {
    allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        title
        id
        feature_image
        excerpt
        slug
        reading_time
        published_at(formatString: "MMM DD YYYY")
        primary_author {
          name
          profile_image
        }
        primary_tag {
          name
        }
        plaintext
        tags {
          id
          name
          slug
        }
      }
    }
  }
`
