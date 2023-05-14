import styled from 'styled-components';

export const Avatar = styled.img`
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[8]}px;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.avatar};
`;

export const Name = styled.h2`
  font: ${p => p.theme.fonts.heading};
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.heading};
`;

export const Tag = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondary};
`;
