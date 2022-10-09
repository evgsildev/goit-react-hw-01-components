import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0 40px 0;
`;

export const Avatar = styled.img`
  max-width: 150px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const Username = styled.p`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
  color: #b2b0af;
`;

export const Location = styled.p`
  font-size: 20px;
  color: #b2b0af;
`;
