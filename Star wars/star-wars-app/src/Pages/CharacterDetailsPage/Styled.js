import styled from "styled-components";

export const Button = styled.button`
border: none;
background-color: goldenrod;
color: white;
padding-top: 8px;
padding-bottom: 8px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
border-radius: 10px;
margin: auto;
margin-left: 580px;
margin-right: 500px;
&:hover {
    cursor: pointer;
    background-color: black;
    color: white;
}
`;

export const Title2 = styled.h1`
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Title3 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  border: 5px solid goldenrod;
  margin-left: 500px;
  margin-right: 500px;
  margin-bottom: 20px;
  font-weight: bold;
`;
