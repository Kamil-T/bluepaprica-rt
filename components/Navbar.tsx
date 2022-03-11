import Image from 'next/image'
import Logo from '../public/images/logo.svg'
import Arrow from '../public/images/arrow.svg'
import MenuButton from '../public/images/menuButton.svg'
import XButton from '../public/images/xbutton.svg'
import styles from '../styles/Navbar.module.scss'
import Menu from './Menu'
import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)
  const [width, setWidth] = useState<number | null | undefined>()
  const languages = ['PL', 'EN', 'ES', 'PT']

  const toggleOpenMenu = () => setIsOpenMenu(!isOpenMenu)
  const toggleOpenLanguage = () => setIsOpenLanguage(!isOpenLanguage)
  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    toggleOpenLanguage()
  }

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
    }
    window.addEventListener('load', updateWidth)
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])
  console.log(width)

  return (
    <header id={styles.header}>
      <div id={styles.navbar}>
        <Image src={Logo} alt='logo' width={97} height={41} />

        {
          // @ts-expect-error
          width >= 1024 ? <Menu isOpenMenu={true} width={width} /> : ''
        }
        <div id={styles.menus}>
          <section id={styles.languageMenu}>
            {!isOpenLanguage && <div>{language}</div>}
            {isOpenLanguage && (
              <div id={styles.opened}>
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
          </section>
          {
            // @ts-expect-error
            width < 1024 ? (
              <Image
                onClick={toggleOpenMenu}
                src={isOpenMenu ? XButton : MenuButton}
                alt='menu button'
              />
            ) : (
              ''
            )
          }
          {
            // @ts-expect-error
            width >= 1024 ? <button>KUP</button> : ''
          }
        </div>
      </div>

      <Menu isOpenMenu={isOpenMenu} width={width} />
    </header>
  )
}

export default Navbar
