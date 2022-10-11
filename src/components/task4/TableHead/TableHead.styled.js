import styled from 'styled-components';

export const Wrapper = styled.thead`
  background-color: lightblue;
  color: white;
  font-size: 24px;
`;

export const TitleRow = styled.tr``;

export const TitleItem = styled.th`
  padding: 10px;
  &:not(:last-child) {
    border-right: 1px solid white;
  }
`;
