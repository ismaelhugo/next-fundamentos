import Menu from "./Menu"
import style from "../styles/Header.module.scss"
import Image from 'next/image'
import Logo from '../../public/logo.png' 

export default function Header(props) {
    return (
        <header className={style.container}>
            
            <Image src={Logo} alt="Picture of the author"
      width={150}
      height={150}/>
            <Menu />
        </header>
    )
}