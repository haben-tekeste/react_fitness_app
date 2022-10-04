import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography fontSize="26px" color="#ff2625" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        mb="23px"
        mt="30px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#ff2625",marginBottom:'8px' }}
        color="error"
        href="#exercises"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
