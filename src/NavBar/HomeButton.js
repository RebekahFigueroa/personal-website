import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

const HomeButton = () => {
  return (
    <NavLink
      to="/home"
      style={(isActive) => ({
        textDecoration: "none",
        color: isActive ? "#1565c0" : "inherit",
      })}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        fontSize="inherit"
        aria-label="Home button"
      >
        <HomeRoundedIcon />{" "}
      </IconButton>
    </NavLink>
  );
};

export default HomeButton;
