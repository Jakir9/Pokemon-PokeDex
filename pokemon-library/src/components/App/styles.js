import styled from "styled-components";

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #56545430;
  background-size: cover;
  border-radius: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
  color: #090909;
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const Center = styled.h1`
  text-align: center;
  color: #090909;
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
`;

const SearchBox = styled.label`
  width: 100%;
  max-width: 500px;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  width: 100%;
`;

export {
  Center,
  MainContainer,
  SearchContainer,
  CardContainer,
  SearchBox,
  SearchInput,
};
