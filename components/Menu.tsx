import { useLanguage } from '../contexts/LanguageContext'
import styles from '../styles/Menu.module.scss'

const Menu = (props: any) => {
  const { language } = useLanguage()
  const { isOpenMenu, width } = props
  console.log(width)
  return (
    isOpenMenu && (
      <div id={styles.menu}>
        <h5>Policz zyski</h5>
        <h5>O produkcie</h5>
        <h5>Kontakt</h5>
        <h5>FAQ</h5>
        {width < 1024 ? <button>KUP</button> : ''}
      </div>
    )
  )
}

export default Menu
