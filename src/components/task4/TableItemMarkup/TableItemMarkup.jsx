import { TableRow } from './TableItemMarkup.styled';

import PropTypes from 'prop-types';

export const TableItemMarkup = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TableRow>{type}</TableRow>
      <TableRow>{amount}</TableRow>
      <TableRow>{currency}</TableRow>
    </>
  );
};

TableItemMarkup.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
