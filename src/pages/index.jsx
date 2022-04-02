import Main from "../components/Main"
import About from "../components/About"
import Header from "../components/Header"
import CardArea from "../components/CardArea"

export default function Home() {
    return (
        <div>
            <Header />
            <Main/>
            <About/>
            <CardArea/>
        </div>
    )
}