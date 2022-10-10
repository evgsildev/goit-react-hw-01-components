import { ListItem } from '../ListItem/ListItem';
import { Wrapper } from './StatList.styled';

export const StatList = ({ data }) => {
  return (
    <Wrapper>
      {data.map(p => (
        <ListItem
          key={p.id}
          label={p.label}
          percentage={p.percentage}
        ></ListItem>
      ))}
    </Wrapper>
  );
};
