import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: calc(350px / 4);
  padding: 20px 0 20px 0;
  background-color: ${p => getRandomHexColor()};
  color: white;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
