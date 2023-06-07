import { FormControlLabel, FormGroup, Link, Switch } from "@mui/material";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav>
        <ul className="header-nav left">
          <li style={{ margin: "0 1rem 0 2rem" }}>
            <Link className="nav-link" underline="none" href="#home">
              Home
            </Link>
            <span className="link-bar">&nbsp;</span>
          </li>
          <li>
            <Link className="nav-link" underline="none" href="#about">
              About
            </Link>
            <span className="link-bar">&nbsp;</span>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <Link className="nav-link" underline="none" href="#projects">
              Projects
            </Link>
            <span className="link-bar">&nbsp;</span>
          </li>
          <li>
            <Link className="nav-link" underline="none" href="#contact">
              Contact
            </Link>
            <span className="link-bar">&nbsp;</span>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="header-nav right">
          <li style={{ margin: "1rem" }}>
            <Link
              className="nav-link"
              href="https://www.linkedin.com/in/chrisclark90/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-xl social"></i>
            </Link>
          </li>
          <li style={{ margin: "1rem" }}>
            <Link
              className="nav-link"
              href="https://github.com/ChrisThinkful"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github fa-xl social"></i>
            </Link>
          </li>
          <li style={{ margin: "0 2rem 0 1rem" }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    color="default"
                  />
                }
                label="Dark Mode"
                style={{ color: theme === "dark" ? "white" : "black" }}
              />
            </FormGroup>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <Link underline="none" href="#home">
          CC
        </Link>
      </div>
    </header>
  );
};

export default Header;
