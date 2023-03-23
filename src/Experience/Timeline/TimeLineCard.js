import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

function TimelineCard({ date, jobTitle, companyName }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  if (isExpanded === true) {
    return (
      <TimelineItem onClick={handleExpandClick}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {date}
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
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <List>
            <ListItem sx={{ listStyleType: "disc" }}>
              n ultricies at augue vitae finibus. Ut dignissim placerat risus
              rhoncus pulvinar. Integer scelerisque ut risus ut gravida.
            </ListItem>
            <ListItem>
              n ultricies at augue vitae finibus. Ut dignissim placerat risus
              rhoncus pulvinar. Integer scelerisque ut risus ut gravida.
            </ListItem>
            <ListItem>
              n ultricies at augue vitae finibus. Ut dignissim placerat risus
              rhoncus pulvinar. Integer scelerisque ut risus ut gravida.
            </ListItem>
            <ListItem>
              n ultricies at augue vitae finibus. Ut dignissim placerat risus
              rhoncus pulvinar. Integer scelerisque ut risus ut gravida.
            </ListItem>
            <ListItem>
              n ultricies at augue vitae finibus. Ut dignissim placerat risus
              rhoncus pulvinar. Integer scelerisque ut risus ut gravida.
            </ListItem>
          </List>
        </TimelineContent>
      </TimelineItem>
    );
  } else {
    return (
      <TimelineItem onClick={handleExpandClick}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {date}
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
}

export default TimelineCard;
