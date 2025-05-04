import { useNavigate } from "react-router-dom";
import foto from "../assets/images/foto_mikael.jpeg";

const IntroSection = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content">
      <div className="intro-section">
        <div className="intro-text">
          <h1>Olá, eu sou o Mikael</h1>
          <p>Software developer front e backend</p>
          <div className="button-group">
            <button className="contact-button">Entre em Contato</button>
            <button
              className="projects-button"
              onClick={() => navigate("/portfolio")}
            >
              Ver Projetos
            </button>
          </div>
        </div>
        <div className="photo-section">
          <div className="background-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <img src={foto} alt="Mikael" className="profile-photo" />
        </div>
      </div>
    </main>
  );
};

export default IntroSection;
