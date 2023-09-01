import "./App.css";
import Home from "./section/Home/Home";
import Welcome from "./section/Welcome/Welcome";
import Treatment from "./section/Treatment/Treatment";
import Dentist from "./section/Dentist/Dentist";
import Gallery from "./section/Gallery/Gallery";
import Testimonials from "./section/Testimonials/Testimonials";
import Blog from "./section/Blog/Blog";
import Appointment from "./section/Appointment/Appointment";
import Footer from "./section/Footer/Footer";
import Copyright from "./section/Copyright/Copyright";

function App() {
  return (
    <>
      <Home />
      <Welcome />
      <Treatment />
      <Dentist />
      <Gallery />
      <Testimonials />
      <Appointment />
      <Blog />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
