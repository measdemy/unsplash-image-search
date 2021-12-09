import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  gap: 1em;
  padding: 5em;
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1em;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 1em;
  }
`;

export const Article = styled.article`
  box-shadow: 1px 1px 10px grey;
  border-radius: 5px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const Description = styled.p`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: white;
  padding: 15px 0;
  text-align: center;
  background: #6c6b69;
  a {
    color: white;
  }
`;
