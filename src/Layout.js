import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "./context/ThemeContext";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import CaseStudy from "./Components/CaseStudies/CaseStudy";

function Layout() {
  const { theme } = useTheme();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://www.codewars.com/api/v1/users/ChrisThinkful')
      .then(response => {
        // console.log(response.data)
        setUserData(response.data);
      })
      .catch(err => console.error('Error: ', err));
  }, []);


  useEffect (() => {
    document.body.className = theme;
  }, [theme])

  return (
    <div className={theme}>
      <Header/>
      <Home id="home" className="hero" />
      <About id="about" className="offset" userData={userData} />
      <CaseStudy id="case-studies" className="offset" />
      <Projects id="projects" className="offset" />
      <Contact id="contact" className="offset" />
      <Footer />
    </div>
  );
}

export default Layout;
