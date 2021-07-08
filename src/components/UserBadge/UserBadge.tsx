// import * as Types from "./UserBadge.types";
import * as Styles from "./UserBadge.styles";
import { Avatar, Badge } from "@material-ui/core";
import { selectCurrentUserProfile } from "store/profile";
import { useSelector } from "react-redux";
import gravatar from "gravatar";

const UserBadge = () => {
  const user = useSelector(selectCurrentUserProfile);
  return (
    <Styles.Container>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <Styles.ExperienceIcon>
            {user.experience ? Math.floor(user.experience / 1000) : 0}
          </Styles.ExperienceIcon>
        }
      >
        <Avatar alt={user.email} src={gravatar.url(user.email)} />
      </Badge>

      <Styles.UserInfoContainer>
        <Styles.DisplayName>{user.displayName}</Styles.DisplayName>
        {user.email}
      </Styles.UserInfoContainer>
    </Styles.Container>
  );
};

export default UserBadge;
