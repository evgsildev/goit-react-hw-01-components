import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
  border-top: 1px solid #b2b0af;
`;

export const StatsItem = styled.li`
  display: flex;
  width: calc(350px / 3);
  padding: 30px 0 30px 0;
  flex-direction: column;

  text-align: center;
  :not(:last-child) {
    border-right: 1px solid #b2b0af;
  }
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 18px;
  color: #b2b0af;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
