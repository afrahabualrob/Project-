import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" className={styles.navbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <img
              src="https://thestudio88.com/wp-content/uploads/2019/07/studio88-desktop-home-v3-FINAL-1.png"
              alt="logo"
              className={styles.logo}
              height="50px"
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Link
                className={styles.menuItem}
                to={{
                  pathname: "/images",
                }}
              >
                <Button sx={{ my: 2, color: "#58768b", display: "block" }}>
                  Images
                </Button>
              </Link>

              <Link
                className={styles.menuItem}
                to={{
                  pathname: "/",
                }}
              >
                <Button sx={{ my: 2, color: "#58768b", display: "block" }}>
                  Upload New Image
                </Button>
              </Link>
            </Box>

            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <Link
                    className={styles.menuItem}
                    to={{
                      pathname: "/images",
                    }}
                  >
                    <Typography textAlign="center" sx={{ color: "#141414" }}>
                      Image
                    </Typography>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link
                    className={styles.menuItem}
                    to={{
                      pathname: "/uploadImages",
                    }}
                  >
                    <Typography textAlign="center" sx={{ color: "#141414" }}>
                      load New Image
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
