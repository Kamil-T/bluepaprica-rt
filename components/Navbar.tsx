import Image from 'next/image'
import Logo from '../public/images/logo.svg'
import Menu from '../public/images/menuButton.svg'
import Arrow from '../public/images/arrow.svg'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <header id={styles.navbar}>
      <div>
        <Image src={Logo} alt='logo' />
      </div>
      <div id={styles.menus}>
        <section>
          <span>PL</span>
          <Image src={Arrow} alt='language selection button' />
        </section>
        <Image src={Menu} alt='menu button' />
      </div>
    </header>
  )
}

export default Navbar
