import styles from "./Sidebar.module.css"
import { PencilLine } from "@phosphor-icons/react"
import { Avatar } from "./Avatar"
import cover from "../assets/cover.jpg"
import avatar1 from "../assets/avatar1.svg"

export function Sidebar() {
  return (
    <div className={styles.profile}>
      <img className={styles.cover} src={cover} alt="Imagem de capa" />
      <div className={styles.info}>
        <Avatar src={avatar1} />
        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </div>
      <div className={styles.footer}>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </div>
    </div>
  )
}
