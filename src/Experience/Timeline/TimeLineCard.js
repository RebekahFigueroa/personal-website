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

function TimelineCard({ startDateYear, jobTitle, companyName }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  if (isExpanded === true) {
    return (
      <TimelineItem sx={{ cursor: "pointer" }} onClick={handleExpandClick}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {startDateYear}
          <Typography color="text.primary">
            October 2021 – September 2022
          </Typography>
          <Typography>Remote- McAllen, TX</Typography>
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

          <Typography variant="caption">
            FactoryFix is a B2B career platform connecting manufacturing
            companies to skilled workers for on-demand labor needs{" "}
          </Typography>
          <List sx={{ listStyleType: "disc", color: "text.secondary" }}>
            <ListItem
              disablePadding
              sx={{ display: "list-item", fontSize: "12px" }}
            >
              Oversaw product strategy for customer- facing business, focusing
              on increasing retention and in-app activity
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "list-item", fontSize: "12px" }}
            >
              Increased customer to candidate SMS in-app communications sent by
              133% in one month
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "list-item", fontSize: "12px" }}
            >
              Optimized internal customer service experience to allocate 15%
              more of time-focused resources to customers
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "list-item", fontSize: "12px" }}
            >
              Identified areas of opportunity in increasing user activity,
              leading to a 10% increase in activity in 1 month after
              implementation of proposed short-term roadmap
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "list-item", fontSize: "12px" }}
            >
              Led an engineering team of 8 developers and a UX designer to
              improve activity on our ATS candidate pipeline, SMS messaging
              tool, talent search network, customer notifications, and dashboard
              features
            </ListItem>
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
}

export default TimelineCard;
