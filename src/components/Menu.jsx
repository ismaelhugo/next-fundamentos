import style from "../styles/Menu.module.scss"

export default function Menu(props) {
    return (
        <div>
            <ul className={style.menu}>
                <li className={style.item}><a href="/">Reservas</a></li>
                <li className={style.item}><a href="/">Catalogo</a></li>
                <li className={style.item}><a href="/">Sobre Nós</a></li>
                <li className={style.item}><a href="/">Contato</a></li>
            </ul>
        </div>
    )
}