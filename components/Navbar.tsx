import Image from 'next/image'
import Logo from '../public/images/logo.svg'
import Arrow from '../public/images/arrow.svg'
import MenuButton from '../public/images/menuButton.svg'
import XButton from '../public/images/xbutton.svg'
import styles from '../styles/Navbar.module.scss'
import Menu from './Menu'
import { useState } from 'react'

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)

  const toggleOpenMenu = () => setIsOpenMenu(!isOpenMenu)
  const toggleOpenLanguage = () => setIsOpenLanguage(!isOpenLanguage)

  return (
    <header id={styles.header}>
      <div id={styles.navbar}>
        <Image src={Logo} alt='logo' />

        <div id={styles.menus}>
          <section id={styles.languageMenu}>
            <div>
              <span>PL</span>
              <span>EN</span>
              <span>ES</span>
            </div>
            <Image
              onClick={toggleOpenLanguage}
              src={Arrow}
              alt='language selection button'
            />
          </section>
          <Image
            onClick={toggleOpenMenu}
            src={isOpenMenu ? XButton : MenuButton}
            alt='menu button'
          />
        </div>
      </div>
      <Menu isOpenMenu={isOpenMenu} />
    </header>
  )
}

export default Navbar
