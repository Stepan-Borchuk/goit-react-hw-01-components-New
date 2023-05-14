import { Statistic } from 'components/Statistic/Statistic';
import { Profile } from '../components/Profile/Profile';
import user from '../components/Profile/user.json';
import data from '../components/Statistic/data.json';
import friends from '../components/FriendList/friends.json';

import { Box } from './Box';
import { Friends } from 'components/FriendList/Friend';

export const App = () => {
  return (
    <Box
      color="text"
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontFamily="body"
      fontWeight="body"
      fontSize="s"
      flexDirection="column">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={data} />

      <Friends friends={friends} />
    </Box>
  );
};
