import Head from 'next/head'

export default function DefaultLayout({ children, title, description }) {
  // TO DO: Add header and footer
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main>{children}</main>
    </>
  )
}
