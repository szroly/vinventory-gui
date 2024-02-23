import Image from "next/image"
import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className="container my-24 mx-auto">
    
    <section className="mb-12">
      <div className={`${styles.container} ${styles.overlay}`}>
        <div className={styles.imgContainer}>
       
        </div>
      </div>
    </section>
    </div>
  )
}