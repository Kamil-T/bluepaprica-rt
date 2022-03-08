import styles from '../styles/Calculator.module.scss'

const Calculator = () => {
  return (
    <div id={styles.calculator}>
      <p>Ile zaoszczędzisz?</p>
      <span>Rachunek jest prosty</span>
      <p>Ile pojemników na szkło zapełniasz miesięcznie?</p>
      <form>
        <input type='text' name='container-count' placeholder='20' />
      </form>
      <p>Ile płacisz za wywóz jednego pojemnika na szkło?</p>
      <form>
        <input type='text' name='price-of-container' placeholder='20' />
      </form>

      <div>
        <p>
          Dzięki kruszarce zaoszczędzisz <span>900</span> rocznie
        </p>
      </div>
    </div>
  )
}

export default Calculator
