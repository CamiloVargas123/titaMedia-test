import styled from 'styled-components';

export const ListPostStyled = styled.section`
  padding: 2rem 1rem;
  display: grid;
  gap: 1rem;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
`;