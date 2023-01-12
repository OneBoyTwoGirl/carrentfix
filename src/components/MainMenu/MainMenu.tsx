import {
  Call,
  Facebook,
  Google,
  LinkedIn,
  Mail,
  Twitter,
} from "@mui/icons-material";
import { AppBar, Box, Button, Container, Link } from "@mui/material";
import React from "react";
import CountrySelect from "./CountrySelect";
import cmc from "./cmc.png";
import { NavLink } from "react-router-dom";
import { bgcolor } from "@mui/system";

function MainMenu() {
  return (
    <>
      <AppBar
        elevation={0}
        sx={{ bgcolor: "#fff", display: { xs: "none", md: "block" } }}
      >
        <>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                height: "2rem",
                flexGrow: 2,
                bgcolor: "#fff",
                clipPath: "polygon(0 0, 100% 0, 96% 100%, 0% 100%)",
                mr: -5,
                //   py: 0.5,
                px: 4,
              }}
            />
            <Box
              sx={{
                height: "2rem",
                bgcolor: "#282a3e",
                clipPath: "polygon(4% 0, 100% 0, 95% 100%, 0 100%)",
                //   py: 1.5,
                px: 4,
                pr: 8,
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexGrow: 1.5,
                // justifyContent: "flex-end",
              }}
            >
              <Link
                href="tel:(+254) 125 876 423"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                <Call sx={{ color: "#ea1f1f", fontSize: "1.2rem" }} />
                (+254) 125 876 423
              </Link>
              <Link
                href="mailto:cmcmotors.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                {" "}
                <Mail sx={{ color: "#ea1f1f", fontSize: "1rem" }} />{" "}
                cmcmotors.com
              </Link>
            </Box>
            <Box
              sx={{
                height: "2rem",
                bgcolor: "#e11d1d",
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
                //   py: 0.5,
                px: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
                ml: -31,
                flexGrow: 1 / 2,
                justifyContent: "flex-end",
              }}
            >
              <Link
                href="https://facebook.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                <Facebook sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Link>
              <Link
                href="https://twitter.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                {" "}
                <Twitter sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Link>

              <Link
                href="https://google.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                {" "}
                <Google sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Link>

              <Link
                href="https://linkedin.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                {" "}
                <LinkedIn sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: "flex", pb: 2, bgcolor: "#fff" }}>
            <Box
              sx={{
                height: "2rem",
                background:
                  "linear-gradient(90deg, rgba(43,45,66,1) 14%, rgba(2,0,36,0.85) 53%)",
                clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                py: 1.2,
                px: 4,
                pr: 8,
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexGrow: 1 / 50,
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  height: "2rem",
                  background:
                    "linear-gradient(90deg, rgba(43,45,66,1) 1%, rgba(252,12,35,1) 78%)",
                  width: "10vw",
                }}
              />
              <NavLink to="/">
                <img src={cmc} width={35} />
              </NavLink>
              <CountrySelect />
            </Box>
            <Box
              sx={{
                bgcolor: "#fff",
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
                gap: 3,
                ml: 6,
              }}
            >
              <NavLink to="/get-vehicle">
                <Button
                  variant="contained"
                  sx={{
                    width: "15vw",
                    textTransform: "capitalize",
                    color: "#fff",
                    bgcolor: "#ed1f1f",
                    ":hover": {
                      bgcolor: "#ed1f1f",
                    },
                  }}
                >
                  get vehicle
                </Button>
              </NavLink>
              <NavLink to="/shop-parts">
                <Button
                  variant="outlined"
                  sx={{
                    width: "15vw",
                    textTransform: "capitalize",
                    color: "#bdbdbd",
                    ":hover": {
                      color: "#ed1f1f",
                    },
                    border: "1px solid #bdbdbd",
                  }}
                >
                  Shop for parts
                </Button>
              </NavLink>
              <NavLink to="/after-sales">
                <Button
                  sx={{
                    width: "15vw",
                    textTransform: "capitalize",
                    color: "#bdbdbd",
                    ":hover": {
                      color: "#ed1f1f",
                    },
                    border: "1px solid #bdbdbd",
                  }}
                >
                  After sales
                </Button>
              </NavLink>
            </Box>
          </Box>
        </>
      </AppBar>
      <AppBar sx={{ bgcolor: "#fff", display: { md: "none" } }}>
        <MenuDrawer />
      </AppBar>
    </>
  );
}

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

type Anchor = "top" | "left" | "bottom" | "right";

function MenuDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MainMenu;
