import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/<%= github_user %>', label: 'Github' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <div>
    <div className="header">
      <h1 className="title"><%= name %></h1>
      <p><code className="purple"><%= description %></code></p>
    </div>
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a target="_blank">{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
      :global(*) {
        padding: 0;
        margin: 0;
      }
      :global(body) {
        font-family: 'Montserrat', sans-serif;
      }
      nav {
        text-align: center;
      }
      .title {
        width: 100%;
        line-height: 1.15;
        font-size: 36px;
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
  </div>
)

export default Nav
