import styled from 'styled-components';

export const CommentsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 400px;
  overflow-y: auto;
  max-height: 450px;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width:10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export const CommentsContentStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  background-color: #cecece;
  padding: .5rem;
  border-radius: 3px;
`;