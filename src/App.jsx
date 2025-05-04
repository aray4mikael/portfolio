import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import LinkedInPosts from "./components/LinkedInPosts";
import MusicSection from "./components/MusicSection";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import Portfolio from "./pages/Portfolio";
import { skills, experiences, linkedInPosts, songs } from "./data/data";
import { projects } from "./data/projects";

function Home() {
  return (
    <>
      <IntroSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <LinkedInPosts posts={linkedInPosts} />
      <MusicSection songs={songs} />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
