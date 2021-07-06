import * as Types from "./UserBadge.types";
import * as Styles from "./UserBadge.styles";
import { Avatar, Badge } from "@material-ui/core";
import { selectUser } from "store/profile";
import { useSelector } from "react-redux";
import gravatar from "gravatar";

const UserBadge = () => {
  const user = useSelector(selectUser);
  return (
    <div style={{ display: "flex" }}>
      <Badge
        // variant="dot"
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <span
            style={{
              width: "16px",
              height: "16px",
              padding: "4px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            2
          </span>
        }
      >
        <Avatar
          alt={user.email ? user.email : "U"}
          src={user.email ? gravatar.url(user.email) : ""}
        />
      </Badge>

      <div
        style={{ marginLeft: "5px", display: "flex", flexDirection: "column" }}
      >
        <div style={{ fontWeight: 800 }}>Username</div>
        {user.email}
      </div>
    </div>
  );
};

export default UserBadge;
