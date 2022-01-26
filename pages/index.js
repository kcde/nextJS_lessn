import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>hello, currently learning next</h1>

        <nav>
          <ul>
            <li>
              <a>about</a>
            </li>
            <li>
              <Link href="/portfolio">porfolio</Link>
            </li>
            <li>
              <Link href="/clients">clients</Link>
            </li>
          </ul>
        </nav>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
