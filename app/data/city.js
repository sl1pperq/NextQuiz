'use client'

export const cityData = [
    {"ask": "Какая столица Аргентины?", "answer": "Буэнос-Айрес"},
    {"ask": "Какая столица Японии?", "answer": "Токио"},
    {"ask": "Какая столица Канады?", "answer": "Оттава"},
    {"ask": "Какая столица Южной Кореи?", "answer": "Сеул"},
    {"ask": "Какая столица Турции?", "answer": "Анкара"},
    {"ask": "Какая столица Испании?", "answer": "Мадрид"},
    {"ask": "Какая столица Италии?", "answer": "Рим"},
    {"ask": "Какая столица Бразилии?", "answer": "Бразилиа"},
    {"ask": "Какая столица Мексики?", "answer": "Мехико"},
    {"ask": "Какая столица ЮАР?", "answer": "Претория"},
    {"ask": "Какая столица Новой Зеландии?", "answer": "Веллингтон"},
    {"ask": "Какая столица Австралии?", "answer": "Канберра"},
    {"ask": "Какая столица Индии?", "answer": "Нью-Дели"},
    {"ask": "Какая столица Китая?", "answer": "Пекин"},
    {"ask": "Какая столица Южной Африки?", "answer": "Претория"},
    {"ask": "Какая столица Саудовской Аравии?", "answer": "Эр-Рияд"},
    {"ask": "Какая столица Пакистана?", "answer": "Исламабад"},
    {"ask": "Какая столица Афганистана?", "answer": "Кабул"},
    {"ask": "Какая столица Италии?", "answer": "Рим"},
    {"ask": "Какая столица Испании?", "answer": "Мадрид"},
    {"ask": "Какая столица Португалии?", "answer": "Лиссабон"},
    {"ask": "Какая столица Японии?", "answer": "Токио"},
    {"ask": "Какая столица Китая?", "answer": "Пекин"},
    {"ask": "Какая столица Индии?", "answer": "Нью-Дели"},
    {"ask": "Какая столица Южной Кореи?", "answer": "Сеул"},
    {"ask": "Какая столица Северной Кореи?", "answer": "Пхеньян"},
    {"ask": "Какая столица Турции?", "answer": "Анкара"},
    {"ask": "Какая столица Ирана?", "answer": "Тегеран"},
    {"ask": "Какая столица Ирака?", "answer": "Багдад"},
    {"ask": "Какая столица Саудовской Аравии?", "answer": "Эр-Рияд"},
    {"ask": "Какая столица Южной Африки?", "answer": "Претория"},
    {"ask": "Какая столица Австралии?", "answer": "Канберра"},
    {"ask": "Какая столица Бразилии?", "answer": "Бразилиа"},
    {"ask": "Какая столица Аргентины?", "answer": "Буэнос-Айрес"},
    {"ask": "Какая столица Мексики?", "answer": "Мехико"},
    {"ask": "Какая столица Канады?", "answer": "Оттава"},
    {"ask": "Какая столица Чили?", "answer": "Сантьяго"},
    {"ask": "Какая столица Шри-Ланки?", "answer": "Шри-Джаяварденепура-Котте"},
    {"ask": "Какая столица Испании?", "answer": "Мадрид"},
    {"ask": "Какая столица Италии?", "answer": "Рим"},
    {"ask": "Какая столица Португалии?", "answer": "Лиссабон"},
    {"ask": "Какая столица Нидерландов?", "answer": "Амстердам"},
    {"ask": "Какая столица Бельгии?", "answer": "Брюссель"},
    {"ask": "Какая столица Швейцарии?", "answer": "Берн"},
    {"ask": "Какая столица Австрии?", "answer": "Вена"},
    {"ask": "Какая столица Словакии?", "answer": "Братислава"},
    {"ask": "Какая столица Словении?", "answer": "Любляна"},
    {"ask": "Какая столица Хорватии?", "answer": "Загреб"},
    {"ask": "Какая столица Боснии и Герцеговины?", "answer": "Сараево"},
    {"ask": "Какая столица Сербии?", "answer": "Белград"},
    {"ask": "Какая столица Румынии?", "answer": "Бухарест"},
    {"ask": "Какая столица Болгарии?", "answer": "София"},
    {"ask": "Какая столица Турции?", "answer": "Анкара"},
    {"ask": "Какая столица Грузии?", "answer": "Тбилиси"},
    {"ask": "Какая столица Армении?", "answer": "Ереван"},
    {"ask": "Какая столица Азербайджана?", "answer": "Баку"},
    {"ask": "Какая столица Казахстана?", "answer": "Нур-Султан"},
    {"ask": "Какая столица Узбекистана?", "answer": "Ташкент"},
    {"ask": "Какая столица Австралии?", "answer": "Канберра"},
    {"ask": "Какая столица Аргентины?", "answer": "Буэнос-Айрес"},
    {"ask": "Какая столица Великобритании?", "answer": "Лондон"},
    {"ask": "Какая столица Греции?", "answer": "Афины"},
    {"ask": "Какая столица Дании?", "answer": "Копенгаген"},
    {"ask": "Какая столица Египта?", "answer": "Каир"},
    {"ask": "Какая столица Испании?", "answer": "Мадрид"},
    {"ask": "Какая столица Канады?", "answer": "Оттава"},
    {"ask": "Какая столица Мексики?", "answer": "Мехико"},
    {"ask": "Какая столица Нигерии?", "answer": "Абуджа"},
    {"ask": "Какая столица Норвегии?", "answer": "Осло"},
    {"ask": "Какая столица Польши?", "answer": "Варшава"},
    {"ask": "Какая столица Саудовской Аравии?", "answer": "Эр-Рияд"},
    {"ask": "Какая столица Турции?", "answer": "Анкара"},
    {"ask": "Какая столица Украины?", "answer": "Киев"},
    {"ask": "Какая столица Финляндии?", "answer": "Хельсинки"},
    {"ask": "Какая столица Швейцарии?", "answer": "Берн"},
    {"ask": "Какая столица Швеции?", "answer": "Стокгольм"},
    {"ask": "Какая столица Ямайки?", "answer": "Кингстон"},
    {"ask": "Какая столица Японии?", "answer": "Токио"}
]

