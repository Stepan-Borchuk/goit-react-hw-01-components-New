import { Profile } from '../components/Profile/Profile';
import user from '../components/Profile/user.json';

import { Box } from './Box';

export const App = () => {
  return (
    <Box
      color="text"
      p={6}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontStyle="body"
      fontWeight='body'
      fontSize='s'
      >

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Box>
  );
};
