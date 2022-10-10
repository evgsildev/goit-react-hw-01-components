import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  width: 350px;
  margin-top: 50px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 20px;
  border-radius: 3%;
  box-shadow: -1px 4px 14px 1px rgba(0, 0, 0, 0.19);
`;
