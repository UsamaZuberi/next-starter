import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className={styles.title}>NextJs 13 Starter Kit</h1>
      </div>
    </section>
  )
}
