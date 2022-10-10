import { Wrapper, ListItem } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          <FriendListItem friend={friend} />
        </ListItem>
      ))}
    </Wrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
