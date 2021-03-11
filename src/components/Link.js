import NextLink from 'next/link'

export default function Link({ children, href, className, styles }) {
  return (
    <NextLink href={href}>
      <a className={className} styles={styles}>
        {children}
      </a>
    </NextLink>
  )
}
