import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.space[6]}px;
  height: '100vh';
  display: 'flex';
  justifycontent: 'center';
  alignitems: 'center';
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.text};
  font: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.body}
`;
