"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
 

import WeatherCard from '../components/weatherCard';
import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";

const WeatherContentWrapper = styled.main`
    margin: auto; 
    width: 80vw; 
    background-color: pink;
`;

const CityName = styled.h1`
    color: #bd0052;
    padding: 3%;
    margin: auto;
    text-align: center;
`;

const WeatherCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: #bd0052 5px dotted;
`;


export default function CityPage() {
    const params = useParams();

    // Fetch weather data with SWR
    const { data, error } = useSWR(`/api/getWeatherData?city=${params.city}`, async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    console.log("API Response:", json);
    return json;
    });

    // Handle error and loading states
    if (error) return <div>Failed to load</div>;
    if (!data) return <div> Loading...</div>;

    // If there is data, get the days otherwise an empty array.
    const days = data?.days || [];
    return (
    <WeatherContentWrapper>
    <CityName>{params.city}</CityName>
    <WeatherCardsContainer>
    {
    days.map((weather: Weather, i: number) =>
    (
        <WeatherCard
        key={i}
        datetime={weather.datetime}
        conditions={weather.conditions}
        description={weather.description}
        tempmin={weather.tempmin}
        tempmax={weather.tempmax}
        />
    )
)
}
</WeatherCardsContainer>
</WeatherContentWrapper>
);
}