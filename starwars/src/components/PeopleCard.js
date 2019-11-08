import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  width: 20%;
  margin-bottom: 2%;
  border: 1px solid black;
  border-radius: 20px;
`;

const Title = styled.h2`
  font-family: Snell Roundhand, cursive;
  font-size: 70px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  padding-bottom: 5%;
  padding-top: 5%;
  margin-top: 0;
  border-radius: 20px;
  background-color: #ffffb5;
  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);
`;

const Info = styled.p`
  font-family: Andale Mono, monospace;
  font-size: 45px;
`;

const PeopleCard = props => {
  return (
    <Card>
      <Title>{props.name}</Title>
      <Info>Born: {props.born}</Info>
      <Info>Gender: {props.gender}</Info>
      <Info>Eye Color: {props.eye}</Info>
      <Info>Hair Color: {props.hair}</Info>
      <Info>Mass : {props.mass}</Info>
    </Card>
  );
};
export default PeopleCard;
