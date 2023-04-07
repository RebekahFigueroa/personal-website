import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const TimelineCard = ({
  startDateYear,
  jobTitle,
  companyName,
  fullDate,
  location,
  companyDescription,
  accomplishments,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  if (isExpanded) {
    return (
      <TimelineItem sx={{ cursor: "pointer" }} onClick={handleExpandClick}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {startDateYear}
          <Typography color="text.primary">{fullDate}</Typography>
          <Typography>{location}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <EngineeringRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            {jobTitle}
          </Typography>
          <Typography color="text.secondary">{companyName}</Typography>

          <Typography variant="caption">{companyDescription}</Typography>
          <List sx={{ listStyleType: "disc", color: "text.secondary" }}>
            {accomplishments.map((accomplishment) => (
              <ListItem
                disablePadding
                sx={{ display: "list-item", fontSize: "12px" }}
              >
                {accomplishment}
              </ListItem>
            ))}
          </List>
        </TimelineContent>
      </TimelineItem>
    );
  } else {
    return (
      <TimelineItem sx={{ cursor: "pointer" }} onClick={handleExpandClick}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {startDateYear}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <EngineeringRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            {jobTitle}
          </Typography>
          <Typography color="text.secondary">{companyName}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  }
};

export default TimelineCard;
