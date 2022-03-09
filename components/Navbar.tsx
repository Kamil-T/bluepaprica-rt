import Image from 'next/image'
import Logo from '../public/images/logo.svg'
import Arrow from '../public/images/arrow.svg'
import MenuButton from '../public/images/menuButton.svg'
import XButton from '../public/images/xbutton.svg'
import styles from '../styles/Navbar.module.scss'
import Menu from './Menu'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <header id={styles.header}>
      <div id={styles.navbar}>
        <Image src={Logo} alt='logo' />

        <div id={styles.menus}>
          <section>
            <span>PL</span>
            <Image src={Arrow} alt='language selection button' />
          </section>
          <Image
            onClick={toggleOpen}
            src={isOpen ? XButton : MenuButton}
            alt='menu button'
          />
        </div>
      </div>
      <Menu isOpen={isOpen} />
    </header>
  )
}

export default Navbar
