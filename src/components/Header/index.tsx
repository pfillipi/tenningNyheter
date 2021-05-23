import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/nyheter.svg" alt="tsNyheter" />
        <nav>
          <a className={styles.active}>Hjemmeside</a>
          <a>Bidragene</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}