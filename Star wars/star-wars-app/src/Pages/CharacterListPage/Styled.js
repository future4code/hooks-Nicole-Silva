import styled from "styled-components";

export const CharacterCard = styled.div`
  border: 5px solid goldenrod;
  padding: 5px;
  margin: auto;
  margin-top: 5px;
  width: 300px;
  font-size: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    border: 5px solid black;
  }
`;

export const Title = styled.div`
text-align: center;
font-size: 45px;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
`;
