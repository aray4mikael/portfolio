import Navbar from "../components/Navbar";
import PortfolioSection from "../components/portfolio/PortfolioSection";
import { projects } from "../data/projects";

const Projetos = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="portfolio-container">
          <PortfolioSection projects={projects} />
        </div>
      </main>
    </div>
  );
};

export default Projetos;
