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
        <NavBar.Item path="/">Inicio</NavBar.Item>
        <NavBar.Item path="/posts">Postagens</NavBar.Item>
      </NavBar.Container>
      <main>{children}</main>
    </>
  )
}
