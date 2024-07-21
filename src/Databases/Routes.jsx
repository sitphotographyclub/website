import Home from "../Components/Home";
import About from "../Components/About";
import Team from "../Components/Team";
import Event from "../Components/Event";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Event2 from "../Components/Events/Event2";
import Event3 from "../Components/Events/Event3";

const Routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
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
        <Event2 />
      </>
    ),
  },
  {
    path: "/event/event2",
    element: (
      <>
        <Navbar />
        <Event3 />
      </>
    ),
  },
];
export default Routes;
