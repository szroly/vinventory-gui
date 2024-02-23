import Image from "next/image";
import styles from "./SideNav.module.scss"

export default function SideNav() {
  return (
    <div className={styles.container}>
        

        

        <a href="#" className={styles.iconLink}>
            <Image src='/parking-area-icon.png' width={40} height={40} alt="icon" />
        </a>

        <a href="#" className={styles.iconLink}>
            <Image src='/service.png' width={40} height={40} alt="icon" />
        </a>

        <a href="#" className={styles.iconLink}>
            <Image src='/medical.png' width={40} height={40} alt="icon" />
        </a>

        <a href="#" className={styles.iconLink}>
            <Image src='/car-document.png' width={40} height={40} alt="icon" />
        </a>

        <a href="#" className={styles.iconLink}>
            <Image src='/toolbox.png' width={40} height={40} alt="icon" />
        </a>

        <a href="#" className={styles.iconLink}>
            <Image src='/logout.png' width={40} height={40} alt="icon" />
        </a>
    </div>
  )
}