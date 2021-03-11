import Head from 'next/head'
import NavBar from './Navbar'

export default function DefaultLayout({ children, title, description }) {
  // TO DO: Add footer
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavBar.Container>
        <NavBar.Item spaceRight>
          <NavBar.Link path="/" styleIfActive={false}>
            <h1>{title}</h1>
          </NavBar.Link>
        </NavBar.Item>
        <NavBar.Item>
          <NavBar.Link path="/">Inicio</NavBar.Link>
        </NavBar.Item>
        <NavBar.Item>
          <NavBar.Link path="/posts">Postagens</NavBar.Link>
        </NavBar.Item>
      </NavBar.Container>
      <main>{children}</main>
    </>
  )
}
