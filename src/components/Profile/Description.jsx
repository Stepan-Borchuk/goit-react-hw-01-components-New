import styles from './Profile.module.css'
import PropTypes from 'prop-types';

export const Description =({username, avatar, tag, location})=> {
    return (
        <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
    )
}

Description.propTypes ={
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
}