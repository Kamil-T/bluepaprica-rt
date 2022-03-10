import Image from 'next/image'
import Logo from '../public/images/logo.svg'
import Arrow from '../public/images/arrow.svg'
import MenuButton from '../public/images/menuButton.svg'
import XButton from '../public/images/xbutton.svg'
import styles from '../styles/Navbar.module.scss'
import Menu from './Menu'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)
  const languages = ['PL', 'EN', 'ES', 'PT']

  const toggleOpenMenu = () => setIsOpenMenu(!isOpenMenu)
  const toggleOpenLanguage = () => setIsOpenLanguage(!isOpenLanguage)
  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    toggleOpenLanguage()
  }

  return (
    <header id={styles.header}>
      <div id={styles.navbar}>
        <Image src={Logo} alt='logo' width={97} height={41} />

        <div id={styles.menus}>
          <section id={styles.languageMenu}>
            <div>
              {!isOpenLanguage && <span>{language}</span>}
              {isOpenLanguage && (
                <>
                  {languages.map((lang) => {
                    return (
                      <span
                        key={lang}
                        onClick={() => {
                          changeLanguage(lang)
                        }}>
                        {lang}
                      </span>
                    )
                  })}
                </>
              )}
            </div>
          </section>
          <Image
            onClick={toggleOpenLanguage}
            src={Arrow}
            alt='language selection button'
          />
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
