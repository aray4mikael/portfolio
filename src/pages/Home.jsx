import IntroSection from "../components/IntroSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import LinkedInPosts from "../components/LinkedInPosts";
import MusicSection from "../components/MusicSection";
import { skills, experiences, linkedInPosts, songs } from "../data/data";

const Home = () => {
  return (
    <>
      <IntroSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <LinkedInPosts posts={linkedInPosts} />
      <MusicSection songs={songs} />
    </>
  );
};

export default Home;
