import styles from '@styles/components/navbar.module.css'
import { useRouter } from 'next/router'
import Link from './Link'

function NavbarContainer({ children }) {
  return <nav className={styles.container}>{children}</nav>
}

function NavbarItem({ children, spaceRight = false }) {
  return (
    <div
      className={`${styles.item} ${spaceRight ? styles.marginRightAuto : ''}`}
    >
      {children}
    </div>
  )
}

function NavbarLink({ children, path, styleIfActive = true }) {
  const router = useRouter()
  const isActive = path === router.pathname
  return (
    <Link
      href={path}
      className={`${styles.link} ${
        styleIfActive && isActive && styles.activeLink
      }`}
    >
      {children}
    </Link>
  )
}
const NavBar = {
  Container: NavbarContainer,
  Item: NavbarItem,
  Link: NavbarLink,
}

export default NavBar
