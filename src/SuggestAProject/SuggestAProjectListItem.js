import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import React, { useEffect, useState } from "react";

const SuggestAProjectList = ({
  id,
  suggestionTitle,
  suggestionDescription,
  numberOfLikes,
}) => {
  const [counter, setCounter] = useState(numberOfLikes);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);

  useEffect(() => {
    fetch(`http://localhost:3001/suggestions/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        numberOfLikes: counter,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }, [counter, id]);

  return (
    <ListItem>
      <ListItemAvatar>
        <ListItemIcon
          onClick={incrementCounter}
          sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        >
          <NorthRoundedIcon />
        </ListItemIcon>
        <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
          {counter}
        </ListItemText>
        <ListItemIcon
          onClick={decrementCounter}
          sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        >
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
