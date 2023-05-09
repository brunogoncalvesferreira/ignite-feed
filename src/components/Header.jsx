import styles from "./Header.module.css"
import logo from "../assets/logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo da página" />
      <h1>Ignite Feed</h1>
    </header>
  )
}
