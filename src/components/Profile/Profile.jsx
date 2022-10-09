import { Wrapper } from './Profile.styled';

import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';

export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => {
  return (
    <Wrapper>
      <Description
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </Wrapper>
  );
};
