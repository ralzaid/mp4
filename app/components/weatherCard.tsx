import { Weather } from "@/app/interfaces/weather";
import styled from "styled-components";

const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-evenly;
  padding: 1rem;
  border: 4px solid #bd0052;
  margin: 1rem; 
  width: 200px; 
  border-radius: 10px;
  color: #bd0052;
`

export default function WeatherCard(props: Weather) {
  return (
    <WeatherCardWrapper className="weather-card">
      <h2>-{props.datetime}</h2>
      <p>{props.conditions}</p>
      <p>{props.description}</p>
      <p>{props.tempmin}°-{props.tempmax}°</p>
    </WeatherCardWrapper>
  );
}
