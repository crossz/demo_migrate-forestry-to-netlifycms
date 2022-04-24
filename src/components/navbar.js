import React, { useState } from 'react'
import { Link } from 'gatsby'

import { graphql, StaticQuery } from 'gatsby'

// class Navbar extends Component {
const Navbar = (props) => {

  const [navState, setNavState] = useState(
    {
      navbarOpen: false,
    }
  )
  

  const toggleNavState = () => {
    setNavState({
      navbarOpen: !navState.navbarOpen,
    })
  }

  // render() {
    return (
      <nav
        className="navbar is-primary main-navigation"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item has-text-weight-semibold"
            to="/"
          >
            {props.siteTitle}
          </Link>

          <span
            onClick={toggleNavState}
            onKeyDown={toggleNavState} // aria-hidden="true"
            role="button"
            tabIndex={0}
            className={
              navState.navbarOpen
                ? 'navbar-burger burger is-active'
                : 'navbar-burger burger'
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="mainMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </div>
        <div
          id="mainMenu"
          className={
            navState.navbarOpen ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
          <div className="navbar-start">
            <StaticQuery
              query={graphql`
                {
                  allMainMenuJson {
                    edges {
                      node {
                        id
                        type
                        url
                        title
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.allMainMenuJson.edges.map(edge => {
                  return edge.node.type === 'internal' ? (
                    <Link
                      key={edge.node.id}
                      to={edge.node.url}
                      className="navbar-item"
                    >
                      {edge.node.title}
                    </Link>
                  ) : (
                    <a
                      key={edge.node.id}
                      className="navbar-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={edge.node.url}
                    >
                      {edge.node.title}
                    </a>
                  )
                })
              }
            />
          </div>
        </div>
      </nav>
    )
  // }
}

export default Navbar
