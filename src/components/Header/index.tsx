import SignInButton from '../SignInButton'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="ig.news"
          width="108.45px"
          height="30.27px"
        />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}

export default Header
