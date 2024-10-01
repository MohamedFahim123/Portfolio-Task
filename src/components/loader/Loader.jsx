import styles from './loader.module.css';
export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.in}></div>
        <div className={styles.out_1}></div>
        <div className={styles.out_2}></div>
        <div className={styles.out_3}></div>
      </div>
    </div>
  )
}
