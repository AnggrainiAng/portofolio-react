import "./App.css";
import Accomplishments from "./components/Accomplishments/Accomplishments";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
      <Footer />
    </div>
  );
}

export default App;
