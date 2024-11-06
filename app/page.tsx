"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin: 10%;
  background-image: radial-gradient(white, #bd0052);
  color: #bd0052;
`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
  <StyledDiv>
    <h1> Find the Weather in any city! </h1>
    <p> Enter a city name below to get the current weather </p>
      <input type="text" value={city} placeholder="city name" onChange={(e) => setCity(e.target.value)} />
      <Link href={`/${city}`}>Get Weather</Link>
  </StyledDiv>
  );
}
