import { useRouter } from 'next/router'
import Link from './Link'

function Item({ children, path }) {
  const router = useRouter()
  const isActive = path === router.pathname
  return (
    <Link href={path}>
      {isActive ? '->' : null}
      {children}
    </Link>
  )
}

function Container({ children }) {
  return <nav>{children}</nav>
}

const NavBar = {
  Container,
  Item,
}

export default NavBar
