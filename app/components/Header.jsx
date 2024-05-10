import Link from "next/link";
import "../App.css"

export const Header = () => {
    return (
        <nav className="main-nav">
            <img src="https://t3.ftcdn.net/jpg/05/69/96/48/360_F_569964847_Wa3tNpPYRGABpplPGSFT3LLB7E2wU0jb.jpg"
                 height="50"
                 alt="Microsoft" className="logo"/>

            <ul className="main-menu">
                <li><Link href="/">Главная</Link></li>
                <li><Link href="/">Обучение</Link></li>
                <li><a href="#">Игры</a></li>
            </ul>

            <ul className="right-menu">
                <li>
                    <a href="#">
                        <i className="fas fa-search"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}