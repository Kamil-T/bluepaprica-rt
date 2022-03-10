import { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import styles from '../styles/Calculator.module.scss'

const Calculator = () => {
  const { language } = useLanguage()
  const [count, setCount] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [saving, setSaving] = useState<number>(NaN)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFunction: { (value: SetStateAction<string>): void }
  ) => {
    setFunction(e.target.value)
  }

  useEffect(() => {
    let countNumber: string | number = parseFloat(count)
    let priceNumber: string | number = parseFloat(price)
    if (count !== undefined && price !== undefined) {
      setSaving(
        12 * (countNumber * priceNumber - (countNumber * priceNumber) / 5)
      )
    }
  }, [count, price])

  return (
    <div id={styles.calculator}>
      <h2>Ile zaoszczędzisz?</h2>
      <p>Rachunek jest prosty.</p>
      <div className={styles.calcbox}>
        <h4>Ile pojemników na szkło zapełniasz miesięcznie?</h4>
        <form>
          <input
            type='text'
            name='container-count'
            placeholder='20'
            onChange={(e) => handleChange(e, setCount)}
          />
        </form>
      </div>
      <div className={styles.calcbox}>
        <h4>Ile płacisz za wywóz jednego pojemnika na szkło?</h4>
        <form>
          <input
            type='text'
            name='price-of-container'
            placeholder='20'
            onChange={(e) => handleChange(e, setPrice)}
          />
        </form>
      </div>

      <div className={` ${styles.saving}`}>
        <h4>Dzięki kruszarce zaoszczędzisz</h4>
        <h2 id={isNaN(saving) === false ? styles.active : ''}>
          {' '}
          {isNaN(saving) === true ? '900' : saving} zł{' '}
        </h2>
        <h4>rocznie.</h4>
      </div>
    </div>
  )
}

export default Calculator
