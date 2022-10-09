import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: calc(350px / 4);
  padding: 20px 0 20px 0;

  color: black;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
