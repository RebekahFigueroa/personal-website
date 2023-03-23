import Timeline from "@mui/lab/Timeline";
import React from "react";
import TimelineCard from "./TimelineCard";

function TimelineStructure() {
  return (
    <Timeline position="alternate">
      <TimelineCard
        startDateYear="May 2016"
        jobTitle="Graduated with B.A. of Chemistry "
        companyName="Purdue University"
      />
      <TimelineCard
        startDateYear="May 2016"
        jobTitle="Process and Formulation Researcher "
        companyName="Procter & Gamble"
      />
      <TimelineCard
        startDateYear="Jan 2020"
        jobTitle="Product Research & Development Analyst"
        companyName="Whole Foods Market"
      />
      <TimelineCard
        startDateYear="Jun 2021"
        jobTitle="Product Specialist"
        companyName="Benitago"
      />
      <TimelineCard
        startDateYear="Oct 2021"
        jobTitle="Product Manager"
        companyName="FactoryFix"
      />
      <TimelineCard
        startDateYear="Dec 2022"
        jobTitle="Software Engineering Student"
        companyName="Flatiron School"
      />
    </Timeline>
  );
}

export default TimelineStructure;
