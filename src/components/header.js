import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    style={{
      background: 'rgba(51,24,46,0.6)',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '80%',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Innova
        </Link>
      </h1>
    </div>
  </header>
)


export default Header
