import styled from 'styled-components';

export const Proffile = styled.div`
  width: ${p => p.theme.space[9]}px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[6]}px;
  box-shadow: ${p => p.theme.shadows.boxShadow1}, ${p => p.theme.shadows.boxShadow2},${p => p.theme.shadows.boxShadow3} ;
`;
