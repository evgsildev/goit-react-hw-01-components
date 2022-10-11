import { Wrapper, TitleRow, TitleItem } from './TableHead.styled';
export const TableHead = () => {
  return (
    <Wrapper>
      <TitleRow>
        <TitleItem>Type</TitleItem>
        <TitleItem>Amount</TitleItem>
        <TitleItem>Currency</TitleItem>
      </TitleRow>
    </Wrapper>
  );
};
