import styled from 'styled-components';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => (p.active ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  max-width: 100px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
