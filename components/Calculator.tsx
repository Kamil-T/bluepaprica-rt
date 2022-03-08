import { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import styles from '../styles/Calculator.module.scss'

const Calculator = () => {
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
      setSaving(countNumber * priceNumber - (countNumber * priceNumber) / 5)
    }
  }, [count, price])

  return (
    <div id={styles.calculator}>
      <p>Ile zaoszczędzisz?</p>
      <span>Rachunek jest prosty</span>
      <p>Ile pojemników na szkło zapełniasz miesięcznie?</p>
      <form>
        <input
          type='text'
          name='container-count'
          placeholder='20'
          onChange={(e) => handleChange(e, setCount)}
        />
      </form>
      <p>Ile płacisz za wywóz jednego pojemnika na szkło?</p>
      <form>
        <input
          type='text'
          name='price-of-container'
          placeholder='20'
          onChange={(e) => handleChange(e, setPrice)}
        />
      </form>

      <div className={styles.saving}>
        <span>Dzięki kruszarce zaoszczędzisz</span>
        <p id={isNaN(saving) === false ? styles.active : ''}>
          {' '}
          {isNaN(saving) === true ? '900' : saving} zł{' '}
        </p>
        <span>rocznie.</span>
      </div>
    </div>
  )
}

export default Calculator
