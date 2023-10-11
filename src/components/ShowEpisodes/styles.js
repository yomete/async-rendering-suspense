import styled from "styled-components";

export const Root = styled.section`
  max-width: 1300px;
  margin: 40px auto;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2px;
`;

export const ShowWrapper = styled.div`
  width: calc(33.333% - 10px);
  margin-right: 10px;
  word-wrap: break-word;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 100%;

  img {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  padding: 20px;
  text-align: left;
`;
