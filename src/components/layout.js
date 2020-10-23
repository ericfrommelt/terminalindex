/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import LoadFonts from "./fonts"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <LoadFonts />
      <Header 
        style={{
          marginBottom: `90em`,
          fontSize: `4rem`,
        }}
        
        siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100hw`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            margin: `0 auto`,
            maxWidth:`90hw`,
            fontFamily: `"Operator Mono SSm A", "Operator Mono SSm B"`,
            fontWeight: `400`,
            fontSize: `.8rem`
          }}
        >
          Wear a mask.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
