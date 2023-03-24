import DeleteIcon from "@mui/icons-material/Delete";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import React from "react";

const SuggestAProjectList = ({
  suggestionTitle,
  suggestionDescription,
  numberOfLikes,
}) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <ListItemIcon>
          <NorthRoundedIcon />
        </ListItemIcon>
        <ListItemText>{numberOfLikes}</ListItemText>
        <ListItemIcon>
          <SouthRoundedIcon />
        </ListItemIcon>
      </ListItemAvatar>
      <ListItemText
        primary={suggestionTitle}
        secondary={suggestionDescription}
      />
    </ListItem>
  );
};

export default SuggestAProjectList;
