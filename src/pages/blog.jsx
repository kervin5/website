import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import PageSection from "../components/Layout/PageSection"
import Padding from "../components/Layout/Padding"
import Header from "../components/UI/Header"
import Highlight from "../components/UI/Highlight"
import AllPosts from "../components/Blog/AllPosts"
import AllTags from "../components/Blog/Tags/AllTags"
import ContactInfo from "../components/UI/ContactInfo"
import SubscribeForm from "../components/Forms/SubscribeForm"
import Search from "../components/Search"

const searchIndices = [{ name: `kervin-blog`, title: `Posts` }]

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog | JavaScript, CSS, HTML, React y más"
        description="Este es un blog sobre JavaScript, HTML, CSS, React y muchos otros temas relacionados al desarrollo web. Es un espacio para seguir creciendo como desarrollador"
      />
      <PageSection splat id="home">
        <Grid>
          <Row middle="xs" center="xs">
            <Col xs={12}>
              <Header nomargin>Blog</Header>
              {/* <SearchBar indices={searchIndices}/> */}
              <Search indices={searchIndices} />
              <AllTags />
            </Col>
          </Row>
        </Grid>
      </PageSection>
      <PageSection splat="left" id="allPosts" color="mutedBgColor">
        <Grid>
          <Row middle="xs" center="xs">
            <Col xs={12}>
              <Padding>
                <Header>
                  Latets <Highlight>Posts</Highlight>
                </Header>
              </Padding>
            </Col>
            <Col xs={12}>
              <AllPosts tenPosts showFeatured />
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

export default BlogPage

// export const postsQuery = graphql`
//   query MyQuery {
//     allGhostPost(limit: 6) {
//       nodes {
//         title
//         id
//         feature_image
//         excerpt
//         slug
//         reading_time
//         published_at(formatString: "MMM DD YYYY")
//         primary_author {
//           name
//           profile_image
//         }
//         primary_tag {
//           name
//         }
//       }
//     }
//   }
// `
