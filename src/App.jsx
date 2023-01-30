import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <h1>Hello World</h1>
        </main>
      </div>
    </div>
  );
}
