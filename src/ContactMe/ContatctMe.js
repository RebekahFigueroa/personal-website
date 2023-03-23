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
          <Typography gutterBottom variant="h1" component="div">
            Want to get in touch?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
              marginRight: "32rem",
              marginLeft: "32rem",
              color: "text.secondary",
            }}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla erat ut tellus accumsan tempus. Proin
              faucibus, purus et tristique malesuada, nulla risus varius ante,
              quis ultricies lectus justo volutpat lorem.
            </Typography>
          </Box>
          <Button variant="contained" sx={{ marginTop: "2rem" }}>
            Contact Me
          </Button>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}

export default ContactMe;
