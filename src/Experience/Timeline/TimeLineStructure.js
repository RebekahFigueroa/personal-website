import Timeline from "@mui/lab/Timeline";
import React, { useEffect, useState } from "react";
import TimelineCard from "./TimelineCard";

function TimelineStructure() {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      fetch("http://localhost:3001/experiences")
        .then((response) => response.json())
        .then((experiences) => setExperienceData(experiences));
    };
    fetchExperience();
  }, []);
  return (
    <Timeline position="alternate">
      {experienceData.map((experience) => (
        <TimelineCard key={experience.id} {...experience} />
      ))}
    </Timeline>
  );
}

export default TimelineStructure;
