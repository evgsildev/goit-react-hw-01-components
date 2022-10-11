import { Wrapper, TableItem } from './TableBody.styled';
import { TableItemMarkup } from '../TableItemMarkup/TableItemMarkup';

export const TableBody = ({ items }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <TableItem key={item.id}>
          <TableItemMarkup item={item} />
        </TableItem>
      ))}
    </Wrapper>
  );
};
