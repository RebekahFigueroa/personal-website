import { Box, Button, Typography } from "@mui/material";
import React from "react";

function ContactMe() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            What's next?
          </Typography>
          <Typography gutterBottom variant="h1" component="div">
            Let's connect!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
              marginRight: "32rem",
              marginLeft: "32rem",
              color: "text.secondary",
            }}
          >
            <Typography sx={{ color: "text.secondary", textAlign: "center" }}>
              I'm actively looking for new opportunities and my inbox is always
              open. My main goal is starting a career in software engineering,
              but I am always interested in hearing about exciting new
              opportunties if you think it might be a good fit. If you have any
              questions or just want to say hi, feel free to reach out and I
              will get back to you as soon as possible!
            </Typography>
          </Box>
          <Button variant="contained" size="large" sx={{ marginTop: "2rem" }}>
            Contact Me
          </Button>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}

export default ContactMe;
