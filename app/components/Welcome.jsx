import Link from "next/link";
import "../App.css"
import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";

export const Welcome = () => {
    return (
        <>
            <div className="menu-btn">
                <i className="fas fa-bars fa-2x"></i>
            </div>

            <div className="container">

                <Header/>

                <header className="showcase">
                    <h2>КвоккаЛайт</h2>
                    <p>
                        Простой сайт для сложных квизов
                    </p>
                    <a href="#" className="btn">
                        Начать <i className="fas fa-chevron-right"></i>
                    </a>
                </header>

                <section className="home-cards">
                    <div>
                        <img src="https://storage.geekclass.ru/images/6e678e57-4ff4-4404-afdc-69d9d0dc3c13.png" alt=""/>
                        <h3>Столицы</h3>
                        <p>
                            Проверьте свои знания на столицы всех стран мира
                        </p>
                        <Link href="/city">ВЫБРАТЬ <i className="fas fa-chevron-right"></i></Link>
                    </div>
                    <div>
                        <img src="https://storage.geekclass.ru/images/27ebc5aa-64a5-45f1-94b7-e2a6513ab4ae.png" alt=""/>
                        <h3>Математика</h3>
                        <p>
                            Решайте примеры на вычисление базовых примеров
                        </p>
                        <a href="#">ВЫБРАТЬ <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div>
                        <img src="https://storage.geekclass.ru/images/eaf0a5f9-edeb-48a9-90c2-f5c62f289346.png" alt=""/>
                        <h3>Английский</h3>
                        <p>
                            Изучайте новые иностранные слова каждый день
                        </p>
                        <a href="#">ВЫБРАТЬ <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div>
                        <img src="https://storage.geekclass.ru/images/2cf31544-f9b9-48a9-9bb9-41a074657ba3.png" alt=""/>
                        <h3>Логика</h3>
                        <p>
                            Решайте много задач, требущих много внимательности
                        </p>
                        <a href="#">ВЫБРАТЬ <i className="fas fa-chevron-right"></i></a>
                    </div>
                </section>

                <section className="xbox">
                    <div className="content">
                        <h2>Поддержите независимый проект!</h2>
                        <p>
                            Миллионы различных заданий и десятки игр доступны всем абслютно бесплатно! Вы можете
                            поддержать
                            независимого разработчика, отправив любую сумму денег
                        </p>
                        <a href="#" className="btn">
                            ПОДДЕРЖАТЬ <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </section>

                <section className="home-cards">
                    <div>
                        <img src="https://i.ibb.co/zVqhWn2/card5.png" alt=""/>
                        <h3>2048</h3>
                        <p>
                            Игра на логику, внимательность и умение правильно делать шаги
                        </p>
                        <a href="#">ИГРАТЬ <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt=""/>
                        <h3>Кубик рубика</h3>
                        <p>
                            Собирайте кубик рубика онлайн - это удобно и очень практично
                        </p>
                        <a href="#">ИГРАТЬ <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/NpPvVHj/card7.png" alt=""/>
                        <h3>Шахматы</h3>
                        <p>
                            Популярная игра теперь и в онлайн-формате, с нейросетями
                        </p>
                        <a href="#">ИГРАТЬ <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/LkP4L5T/card8.png" alt=""/>
                        <h3>Крестики-нолики</h3>
                        <p>
                            Пригласите своего друга или подругу, чтобы сыграть в игру
                        </p>
                        <a href="#">ИГРАТЬ <i className="fas fa-chevron-right"></i></a>
                    </div>
                </section>

                <section className="carbon dark">
                    <div className="content">
                        <h2>Большой экологический вклад</h2>
                        <p>
                            КвоккаЛайт сократило использование бумаги на 60% в пользу простых экологичных графических
                            платшетов.
                        </p>
                        <a href="#" className="btn">
                            Learn More <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </section>

                <section className="follow">
                    <p>Основной проект - https://pro.quokkaquiz.ru</p>
                </section>
            </div>

            <Footer/>
        </>
    )
}