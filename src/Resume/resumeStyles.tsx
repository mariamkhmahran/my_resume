import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  width: 50%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  padding: 0px 10%;

  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
    padding: 30px 0;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 50px;
  box-sizing: border-box;
  height: 50%;
  gap: 20px;

  @media (max-width: 1024px) {
    justify-content: center;
    padding-bottom: 0px;
    height: fit-content;
    gap: 5px;
  }
`;

export const ContactDetails = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 500;

  @media (max-width: 1024px) {
    margin-top: 5px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LinkedinRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const CV = styled.div`
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const Display = styled.div`
  box-shadow: 0px 10px 20px 0px #0002;
  width: fit-content;
`;

export const Img = styled.img`
  max-height: 500px;
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 50px;
  }
`;

export const Button = styled.a`
  padding: 10px 50px;
  text-decoration: none;
  color: black;
  border: 3px solid black;
  border-radius: 10px;
`;
