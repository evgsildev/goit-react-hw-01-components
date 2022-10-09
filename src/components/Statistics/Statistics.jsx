import { Wrapper, Title } from './Statistics.styled';
import { StatList } from '../StatList/StatList';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <Wrapper>
      <Title>Upload stats</Title>
      <StatList data={data} />
    </Wrapper>
  );
};

Statistics.propTypes = {
  data: PropTypes.array,
};
