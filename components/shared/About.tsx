import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", margin: "10rem 0" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginRight: "10rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginBottom: "1.5rem", fontSize: "3rem" }}
          >
            BRINGING YOU THE <span style={{ color: "#d87d4a" }}>BEST</span>{" "}
            AUDIO GEAR
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#8d8d8d", fontSize: "1rem", marginBottom: "3rem" }}
          >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur quisquam optio sapiente alias est esse voluptatem adipisci perferendis, earum saepe culpa soluta minima. Ipsum quis dolores quam ab ipsam.
          </Typography>
        </Box>
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="about-image"
          height={500}
          width={450}
        />
      </Box>
    </Container>
  );
};

export default About;
