import styles from '../style/inner.module.css';

export default function OutreContainer({children}) {
  return <div className={styles.innerContainer}>{children}</div>;
}
