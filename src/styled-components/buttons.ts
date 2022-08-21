import styled from 'styled-components';

interface Props {
  primary?: boolean;
}

export const Buttons = styled.button<Props>`
  background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  font-weight: 100;
  cursor: pointer;
  &:hover {
    background: ${props => props.primary ? "#424242" : "#ebebeb"};
  }
`;