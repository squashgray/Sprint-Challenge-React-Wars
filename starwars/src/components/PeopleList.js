import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";
import styled from "styled-components";

export default function PeopleList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/"
      )
      .then(response => {
        setPeople(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log("SIKE", error);
      });
  }, []);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40%;
    width: 100%;
    height: 100%;
  `;

  return (
    <Container>
      {people.map(people => {
        return (
          <PeopleCard
            key={people.name}
            name={people.name}
            born={people.birth_year}
            gender={people.gender}
            hair={people.hair_color}
            eye={people.eye_color}
            mass={people.mass}
          />
        );
      })}
    </Container>
  );
}
