import Timeline from "@mui/lab/Timeline";
import React from "react";
import TimelineCard from "./TimelineCard";

function TimelineStructure() {
  return (
    <Timeline position="alternate">
      <TimelineCard
        date="May 2016"
        jobTitle="Process and Formulation Researcher "
        companyName="Procter & Gamble"
      />
      <TimelineCard
        date="Jan 2020"
        jobTitle="Product Research & Development Analyst"
        companyName="Whole Foods Market"
      />
      <TimelineCard
        date="Jun 2021"
        jobTitle="Product Specialist"
        companyName="Benitago"
      />
      <TimelineCard
        date="Oct 2021"
        jobTitle="Product Manager"
        companyName="FactoryFix"
      />
      <TimelineCard
        date="Dec 2022"
        jobTitle="Software Engineering Student"
        companyName="Flatiron School"
      />
    </Timeline>
  );
}

export default TimelineStructure;
