
import PropTypes from 'prop-types';
import { Avatar, Descriptin, Name, Tag} from './Description.styled';

export const Description =({username, avatar, tag, location})=> {
    return (
        <Descriptin>
        <Avatar
          src={avatar}
          alt="User avatar"
          
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </Descriptin>
    )
}

Description.propTypes ={
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
}