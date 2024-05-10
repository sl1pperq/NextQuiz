'use client'
import Link from "next/link";
import {useState, useEffect} from 'react'
import "../App.css"
import {Header} from "@/app/components/Header";
import {useGetCityData} from "@/app/api/api";

export const PageCity = (props) => {
    const city = useGetCityData();
    const [authData, setAuthData] = useState("");
    const [isClient, setIsClient] = useState(city)
    const [message, setMessage] = useState({status: null, text: null});

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleInput = (e) => {
        setAuthData(e.target.value)
    };

    const handleSubmit = async (e) => {
        event.preventDefault()
        console.log(authData)
        console.log(city.answer)
        if (authData.toLowerCase() === city.answer.toLowerCase()) {
            setMessage({status: "success", text: "Ответ правильный!"});
        } else {
            setMessage({status: "success", text: `Некорректный ответ, это ${city.answer}!`});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="menu-btn">
                <i className="fas fa-bars fa-2x"></i>
            </div>

            <div className="container">
                <Header/>
                <section className="xbox--wp">
                    <div className="content">
                        {isClient ? (
                            <h2>{city.ask}</h2>
                        ) : (
                            <h2>Загрузка...</h2>
                        )}


                        <input name="userInput" onInput={handleInput}/>
                        <p>
                            <button type="submit" className="btn--classic">
                                ОТВЕТИТЬ
                            </button>
                            {message.status && (
                                <Link href="/city" onClick={() => window.location.reload()}  className="btn--good">
                                    ДАЛЕЕ
                                </Link>
                            )}
                        </p>
                        {message.status && (
                            <p>{message.text}</p>
                        )}
                    </div>
                </section>
            </div>
        </form>
    )
}