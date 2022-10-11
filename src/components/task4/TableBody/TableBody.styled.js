import styled from 'styled-components';

export const Wrapper = styled.tbody`
  font-size: 16px;
  text-transform: capitalize;
`;

export const TableItem = styled.tr`
  &:nth-child(even) {
    background-color: #f0faf8;
  }
`;
