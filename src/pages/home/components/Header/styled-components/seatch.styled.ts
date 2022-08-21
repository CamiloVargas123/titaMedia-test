import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 100%;
  max-width: 400px;
  border: 1px solid black;
  display: flex;
  border-radius: 3px;
  button {
    border: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: white;
    cursor: pointer;
    padding-inline: .5rem;
    &:hover{
      background-color: #cecece;
    }
  }
`;

export const SearchInput = styled.input`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: .5rem;
  width: 100%;
  border: none;
  outline: none;
`;