import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import fetch from 'node-fetch';

import '../style.scss'

class App extends React.Component {
  
  static async getInitialProps({ req }) {
    const dev = process.env.NODE_ENV !== 'production';
    const server = dev ? `http://localhost:${process.env.PORT}` : process.env.API_URL;

    const res = await fetch(`${server}/api/github/user/<%= github_user %>`)
    const githubAccountInfo = await res.json()
    return { githubAccountInfo }
  }


  constructor(props) {
    super(props)
  }

  render() {
    const {
      bio,
      html_url,
      name,
      location,
      login,
    } = this.props.githubAccountInfo
    
    return (
      <div>
        <Head title="<%= name %>">
          <meta charSet='utf-8' />
          <meta name='description' content='<%= description %>' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className="page">
          <div className="hero">
            <div className="row">
              <Link href={html_url}>
                <a className="card">
                  <h3>Github @{login} &rarr;</h3>
                  <h4>{name}</h4>
                  <h6><snall>{location}</snall></h6>
                  <p><code className="red">{bio}</code></p>
                  <p><code className="red">A COMPLETELY DIFFRENET TEMPLATE</code></p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
