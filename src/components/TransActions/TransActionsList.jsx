import { TdataStyled, TrowStyled } from './TransActions.styled';

export const TransActionsList = ({ items }) => {
  return items.map((prop, index) => (
    <TrowStyled index={index}>
      <TdataStyled>{prop.type}</TdataStyled>
      <TdataStyled>{prop.amount}</TdataStyled>
      <TdataStyled>{prop.currency}</TdataStyled>
    </TrowStyled>
  ));
};
