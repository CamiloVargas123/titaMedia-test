import styled from 'styled-components';

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  /* padding-inline: 8px;
  padding-block: 4px;
  border-radius: 25px;
  background-color: #cecece;
  cursor: pointer; */
`;
export const ProfileData = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PhotoProfile = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 30px;
`;