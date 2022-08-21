import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 35px;
  z-index: 1000;
  border-radius: 3px;
`;
export const ModalClose = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  button {
    border: none;
    background-color: transparent;
    font-size: 22px;
    cursor: pointer;
    &:hover {
      background-color: #cecece;
      border-radius: 3px;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.7);
  z-index: 1000;
`;