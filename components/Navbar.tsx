import Image from 'next/image'
import Logo from '../public/images/logo.svg'
import Arrow from '../public/images/arrow.svg'
import MenuButton from '../public/images/menuButton.svg'
import XButton from '../public/images/xbutton.svg'
import styles from '../styles/Navbar.module.scss'
import Menu from './Menu'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = ({ width }: any) => {
  const { language, setLanguage } = useLanguage()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)
  const languages = ['PL', 'EN', 'ES', 'PT']
  const desktop = width >= 1024

  const toggleOpenMenu = () => setIsOpenMenu(!isOpenMenu)
  const toggleOpenLanguage = () => setIsOpenLanguage(!isOpenLanguage)
  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    toggleOpenLanguage()
  }

  return (
    <header id={styles.header}>
      <div id={styles.navbar}>
        <div id={styles.logo}>
          <Image
            src={Logo}
            alt='logo'
            width={desktop ? 120 : 97}
            height={desktop ? 51 : 41}
          />
        </div>

        {desktop ? <Menu isOpenMenu={true} width={width} /> : ''}
        <div id={styles.menus}>
          <section id={styles.languageMenu}>
            <div
              id={styles.languages}
              className={`${isOpenLanguage && styles.opened}`}>
              {!isOpenLanguage && <div>{language}</div>}
              {isOpenLanguage && (
                <div>
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
                </div>
              )}
              <Image
                onClick={toggleOpenLanguage}
                src={Arrow}
                alt='language selection button'
                width={9}
                height={6}
              />
            </div>
          </section>
          {!desktop ? (
            <div id={styles.menuButton}>
              <Image
                onClick={toggleOpenMenu}
                src={isOpenMenu ? XButton : MenuButton}
                alt='menu button'
              />
            </div>
          ) : (
            ''
          )}
          {desktop ? <button>KUP</button> : ''}
        </div>
      </div>

      <Menu isOpenMenu={isOpenMenu} width={width} />
    </header>
  )
}

export default Navbar
