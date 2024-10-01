import styles from './notFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound__handler}>
      <h1>Error-404</h1>
      <p>Not Found This Page</p>
    </div>
  );
};
