import styled from 'styled-components';

export const CardPost = styled.article`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  background-color: white;
  border-radius: 3px;
  padding: .5rem;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: .5rem;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  cursor: pointer;
  img {
    object-fit: cover;
    border-radius: 100%;
    width: 30px;
  }
`;

export const CardImage = styled.img`
  object-fit: cover;
  height: 200px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  p {
    background-color: #cfcfcf;
    padding: .2rem;
    border-radius: 3px;
  }
`;
export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  p {
    :last-child {
      cursor: pointer;
      &:hover{
        color: blue;
      }
    }
  }
`;
export const TruncatedText = styled.p`
  min-height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  line-clamp: 2; 
  -webkit-box-orient: vertical;
`;