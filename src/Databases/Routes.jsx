import Home from "../Components/Home";
import About from "../Components/About";
import Team from "../Components/Team";
import Event from "../Components/Event";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Event1 from "../Components/Events/Event1";
import Event2 from "../Components/Events/Event2";
import LandscapePhotographyMain from "../Components/Home2";
import NavigationBar from "../Components/Navbar2";
import { SecondPage } from "../Components/SecondPage";

const Routes = [
  {
    path: "/",
    element: (
      <>
        <NavigationBar />
        <LandscapePhotographyMain />
        <Footer />
      </>
    ),
  },
  {
    path: "/masterclass",
    element: (
      <>
        <NavigationBar />
        <SecondPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <Navbar />
        <Team />
        <Footer />
      </>
    ),
  },
  {
    path: "/event",
    element: (
      <>
        <Navbar />
        <Event />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },

  {
    path: "/event/event1",
    element: (
      <>
        <Navbar />
        <Event1 />
      </>
    ),
  },
  {
    path: "/event/event2",
    element: (
      <>
        <Navbar />
        <Event2 />
      </>
    ),
  },
];
export default Routes;
