import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''> Entenda como funciona a técninca pomodoro</a>
      <a href=''>
        {' '}
        FocusFlow &copy; {new Date().getFullYear()} - Feito para sua
        produtividade
      </a>
    </footer>
  );
}
