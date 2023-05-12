import { Description } from './Description';
import { Stats } from './Stats';

import PropTypes from 'prop-types';
import { Proffile } from './Profile.styled';



export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Proffile>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats}/>
    </Proffile>
  );
};

Profile.propTypes ={
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object
}