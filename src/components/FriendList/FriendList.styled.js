import styled from 'styled-components';

//   .statusOn {
//     margin-left: 10px;
//     margin-right: 20px;
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     color: green;
//   }

//   .statusOff {
//     margin-left: 10px;
//     margin-right: 20px;
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     color: red;
//   }

export const FriendsAvatar = styled.img`
  border-radius: ${p => p.theme.radii.xs};
  background-color: ${p => p.theme.colors.secondary};
`;

export const FriendsName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
  margin-left: ${p => p.theme.space[4]}px;
`;

export const FriendsState = styled.span`
  margin-left: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.avatar};
  color: ${p=> p.state ? 'green' : 'red'};

`;
