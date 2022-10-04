import React from "react";
import { Stack } from "@mui/system";
import Logo from "../assets/images/Logo.png";
import { Link } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="none" px="20px"
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt=""
          style={{ width: "38px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{ textDecoration: "none", borderBottom: "3px solid #ff2625" }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
