import React from "react";
import { AppBar, Toolbar, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Navbar = () => {
  return (
    <AppBar component="nav">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOGO
          </Typography>
          {/* <Link
            to={{
              pathname: "/images",
            }}
          /> */}
                  <Button sx={{ color: "#fff" }}> Images List</Button>
                  <CloudUploadIcon/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
