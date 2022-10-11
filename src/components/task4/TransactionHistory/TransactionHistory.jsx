import { Wrapper } from './TransactionHistory.styled';
import { TableHead } from '../TableHead/TableHead';
import { TableBody } from '../TableBody/TableBody';

import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <TableHead />
      <TableBody items={items} />
    </Wrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
