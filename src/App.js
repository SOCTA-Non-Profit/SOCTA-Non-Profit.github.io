import React from "react";
import { useAppContext } from "./appContext";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGitHubInfo,
  selectError,
  selectIsLoading,
} from "./pages/homeSlice";
import { fetchGitHubReops } from "./pages/allProjectsSlice";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { ThemeProvider } from "styled-components";
// Data
import { navLogo } from "./data";
// Components
import { Container } from "react-bootstrap";
import { Loading } from "./components/globalStyledComponents";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
// Pages
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";
import SRK2025 from "./pages/SRK2025";
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import Gallery from "./pages/Gallery";
import BoardMembers from "./pages/BoardMembers";

// Only light theme - dark mode removed
const theme = {
  name: "light",
  color: "#2C1810", /* Dark brown for text */
  background: "#FFFFFF", /* Pure white background */
};

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  React.useEffect(
    function () {
      dispatch(fetchGitHubInfo());
      dispatch(fetchGitHubReops());
    },
    [dispatch]
  );

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container className="d-flex vh-100 align-items-center">
          <Loading />
        </Container>
      </ThemeProvider>
    );
  } else if (error) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container className="d-flex vh-100 align-items-center justify-content-center">
          <h2>{error}</h2>
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <HashRouter>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <GlobalStyles />
          <Element name={"Home"} id="home">
            <NavBar Logo={navLogo} />
          </Element>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/board" element={<BoardMembers />} />
            <Route path="/All-Projects" element={<AllProjects />} />
            <Route path="/SRK2025" element={<SRK2025 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    );
  }
}