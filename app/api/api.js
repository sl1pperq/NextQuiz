import {useState, useEffect} from 'react';
import {cityData} from "@/app/data/city";

export const useGetCityData = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const data = cityData[Math.floor(Math.random()*cityData.length)]
        setData(data);
    }, []);
    return data;
};