import styles from '../styles/Menu.module.scss'

const Menu = ({ isOpen }) => {
  console.log(isOpen)
  return (
    isOpen && (
      <div id={styles.menu}>
        <h5>Policz zyski</h5>
        <h5>O produkcie</h5>
        <h5>Kontakt</h5>
        <h5>FAQ</h5>
        <button>KUP</button>
      </div>
    )
  )
}

export default Menu
