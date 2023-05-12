import styled from 'styled-components';

export const Stat = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: #f5f5f5;
`;

export const StatElem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  :not(:last-child) {
    border-right: 1px solid #e6e6e6;
  }
`;

export const StatLabel = styled.span`
 font-size: 12px;
    color: gray;
`;

export const StatQuntity = styled.span`
    margin-top: 5px;
    font-weight: 700;
    font-size: 12px;
`;