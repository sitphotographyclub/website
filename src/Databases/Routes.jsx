import Home from "../Components/Home";
import About from "../Components/About";
import Team from "../Components/Team";
import Event from "../Components/Event";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Event1 from "../Components/Events/Event1";
import LandscapePhotographyMain from "../Components/Home2";
import NavigationBar from "../Components/Navbar2";
import { SecondPage } from "../Components/SecondPage";
import { ThirdPage } from "../Components/ThirdPage";
import { ForthPage } from "../Components/ForthPAge";

const Routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <LandscapePhotographyMain />
        <Footer />
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <Navbar />
        <Team/>
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
    path: "/classes",
    element: (
      <>
        <NavigationBar />
        <ThirdPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/event",
    element: (
      <>
        <Navbar/>
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
    path: "/event/:id",
    element: (
      <>
        <Navbar />
        <Event1 />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer/>
      </>
    ),
  },

];
export default Routes;
