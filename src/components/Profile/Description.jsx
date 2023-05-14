import PropTypes from 'prop-types';
import { Avatar, Name, Tag } from './Description.styled';
import { Box } from 'App/Box';

export const Description = ({ username, avatar, tag, location }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={4}>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Tag>{location}</Tag>
    </Box>
  );
};

Description.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
