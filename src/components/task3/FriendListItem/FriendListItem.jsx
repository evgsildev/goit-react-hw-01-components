import { Status, Avatar, FriendName } from './FriendListItem.styled';

import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status active={isOnline}></Status>
      <Avatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
};
