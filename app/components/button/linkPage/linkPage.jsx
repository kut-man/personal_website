import styles from '../page.module.scss'

export default function LinkPage({ text, to }) {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <a target='_blank' href={to} >{text}</a>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
        <path
          d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
        </path>
      </svg>
    </div>
  )
}