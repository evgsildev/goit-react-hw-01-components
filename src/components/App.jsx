import { Profile } from './task1/Profile/Profile';
import { Statistics } from './task2/Statistics/Statistics';
import { FriendList } from './task3/FriendList/FriendList';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
    </>
  );
};
