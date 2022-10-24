import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-about" role="menuitem">
                <Link to={`/programs`}>Art & Design Programs</Link>
              </li>
              <li className="nav-openhouse" role="menuitem">
                <Link to={`/openhouse`}>Open House</Link>
              </li>
              <li className="nav-home" role="menuitem">
                <Link to={`/`}>Student Galleries</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <nav className="site-head-right">
            <ul className="nav" role="menu">
              <li className="nav-about" role="menuitem">
                <Link to={`/events`}>Art Shows & Events</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/faculty`}>Faculty</Link>
              </li>
              <li className="nav-home" role="menuitem">
                <Link to={`/schedule`}>Studio & Lab Schedule</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &mdash; &copy;{new Date().getFullYear()} <Link to={`/`}>{title}</Link>{" "}
        &mdash;
        <br />
        <Link to="https://www.northampton.edu/">
          Northampton Community College
        </Link>
      </footer>
    </div>
  )
}

export default Layout
