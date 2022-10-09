import { Wrapper, Avatar, Username, Tag, Location } from './Description.styled';

export const Description = ({ avatar, username, tag, location }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="User avatar" className="avatar" />
      <Username className="name">{username}</Username>
      <Tag className="tag">@{tag}</Tag>
      <Location className="location">{location}</Location>
    </Wrapper>
  );
};
