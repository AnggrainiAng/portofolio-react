import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Technologies />

      <Footer />
    </div>
  );
}

export default App;
