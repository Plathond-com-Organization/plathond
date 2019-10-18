import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import BackgroundImage from "gatsby-background-image-es5"

export const IndexPageTemplate = ({ image, title, heading, twitter, instagram, email }) => {
  return (
    <>
      <BackgroundImage Tag="section" className="bg-fixed bg-cover bg-bottom" fluid={image.childImageSharp.fluid}>
        <div className="text-center bg-custom-black-50 flex flex-col justify-center items-center">
          <div className="px-5 md:px-20 flex flex-col items-center my-20">
            <h1 className="mb-3 text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{title}</h1>
            <h1 className="text-white text-xl md:text-2xl xl:text-3xl bg-custom-red py-2 px-8 rounded-lg">{heading}</h1>
            <div className="mt-8 flex text-black text-4xl">
              <a href={twitter} target="_blank" rel="noopener noreferrer" className="social-button">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-button">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <ContactForm email={email}/>
        </div>
      </BackgroundImage>
    </>
  )
}

export const ContactForm = ({email}) => {
  return (
    <div className="my-16 mt-0 md:mt-10 w-full lg:w-1/2 container">
      <h3 className="text-white text-2xl mb-4">Contact us now for a quick response:</h3>
      <form action={`https://mailthis.to/${email}`} method="POST" className="flex flex-col text-left">
        <div className="form-group">
          <input placeholder="Name" className="form-input placeholder-gray-300" type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <input placeholder="Email" className="form-input placeholder-gray-300" type="email" name="email" id="name" />
        </div>
        <div className="form-group">
          <textarea placeholder="Message" className="form-input placeholder-gray-300" name="message" id="message" cols="30" rows="5"></textarea>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const { title, image, heading, twitter, instagram, email } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <IndexPageTemplate image={image} title={title} heading={heading} twitter={twitter} instagram={instagram} email={email}/>
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
            fluid(maxWidth: 2048, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        twitter
        instagram
        email
      }
    }
  }
`
