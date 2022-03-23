import style from "../styles/Main.module.scss";
import Image from 'next/image'
import Logo from '../../public/1.png'

import { AiOutlineDown } from 'react-icons/ai'


export default function Main(props) {
    return (
        <section className={style.container}>
            <div className={style.textGroup}>
                <Image src={Logo} alt="Picture of the author"
                width={300}
                height={300}/>
                <h1 className={style.title}>Aluguel de lanchas em Angra dos Reis</h1>
                <a>
                    <AiOutlineDown />
                </a>
            </div>
        </section>
    )
}