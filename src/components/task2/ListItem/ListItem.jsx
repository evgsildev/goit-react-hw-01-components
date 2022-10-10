import { Wrapper, Label, Percentage } from './ListItem.styled';
import PropTypes from 'prop-types';

export const ListItem = ({ label, percentage }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </Wrapper>
  );
};

ListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
