import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import "../styles/index.css"

import Layout from "../components/Layout"
import BackgroundImage from "gatsby-background-image-es5"

export const IndexPageTemplate = ({ image, title, heading }) => {
  return (
    <>
      <BackgroundImage Tag="section" className="bg-fixed bg-cover bg-bottom" fluid={image.childImageSharp.fluid}>
        <div className="text-center bg-custom-black-50 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center my-20">
            <h1 className="text-white text-6xl font-bold">{title}</h1>
            <h1 className="text-white text-3xl bg-custom-red py-2 px-8 rounded-lg">{heading}</h1>
            <div className="mt-8 flex text-black text-4xl">
              <a href="https://twitter.com/@luvnature_" target="_blank" className="social-button">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/_luvnature/" target="_blank" className="social-button">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </BackgroundImage>
    </>
  )
}

export const ContactForm = () => {
  return (
    <form action="" className="my-20 container flex flex-col text-left w-1/2">
      <div className="form-group">
        <input placeholder="Name" className="form-input placeholder-gray-300" type="text" name="name" id="name" />
      </div>
      <div className="form-group">
        <input placeholder="Email" className="form-input placeholder-gray-300" type="email" name="email" id="name" />
      </div>
      <div className="form-group">
        <textarea placeholder="Message" className="form-input placeholder-gray-300" name="message" id="message" cols="30" rows="5"></textarea>
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  )
}

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// }

const IndexPage = ({ data }) => {
  const { title, image, heading } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <IndexPageTemplate
        image={image}
        title={title}
        heading={heading}
        // subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    whats: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        heading
      }
    }
  }
`
