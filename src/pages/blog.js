import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
// import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import PageSection from "../components/layout/PageSection"
import Padding from "../components/layout/Padding"
import HTag from "../components/ui/htag"
import Highlight from "../components/ui/Highlight"
import AllPosts from "../components/blog/allPosts"
import SearchBar from "../components/blog/searchBar"
import AllTags from "../components/blog/allTags"
import ContactInfo from "../components/ui/ContactInfo"
import SubscribeForm from "../components/forms/SubscribeForm"
// import SearchBarD from "../components/blog/searchBarD"

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
              <HTag nomargin>Blog</HTag>
              <SearchBar />
              <AllTags />
              {/* <SearchBarD /> */}
            </Col>
          </Row>
        </Grid>
      </PageSection>
      <PageSection splat="left" id="aboutMe">
        <Grid>
          <Row middle="xs" center="xs">
            <Col xs={12}>
              <Padding>
                <HTag>
                  Latets <Highlight>Posts</Highlight>
                </HTag>
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
