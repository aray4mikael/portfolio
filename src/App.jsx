import "./App.css";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import LinkedInPosts from "./components/LinkedInPosts";
import MusicSection from "./components/MusicSection";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import { skills, experiences, linkedInPosts, songs } from "./data/data";

function App() {
  return (
    <div className="app">
      <Navbar />
      <IntroSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <LinkedInPosts posts={linkedInPosts} />
      <MusicSection songs={songs} />
    </div>
  );
}

export default App;
