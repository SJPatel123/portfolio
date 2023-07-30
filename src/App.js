import './App.css';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contactme from './components/Contactme';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <div className="my-intro">
          <Introduction />
        </div>
        <div className="skill-set">
          <div className="title">
            <p className="skill">Skill Set</p>
          </div>
          <div className="my-skills">
            <table className="skill-table">
              <tr className="first-row">
                <td style={{"--i":"8"}}><Skills skillName="HTML & CSS" value="80"/></td>
                <td style={{"--i":"9"}}><Skills skillName="JavaScript" value="75"/></td>
                <td style={{"--i":"10"}}><Skills skillName="C & C++" value="85"/></td>
                <td style={{"--i":"11"}}><Skills skillName="Android Design (XML)" value="90"/></td>
                <td style={{"--i":"12"}}><Skills skillName="React.js & Node.js" value="70"/></td>
              </tr>
              <tr className="second-row">
                <td style={{"--i":"8"}}><Skills skillName="Git & GitHub" value="70"/></td>
                <td style={{"--i":"9"}}><Skills skillName="Problem Solving" value="82"/></td>
                <td style={{"--i":"10"}}><Skills skillName="VS Code" value="75"/></td>
                <td style={{"--i":"11"}}><Skills skillName="Data Structure & Algorithms" value="50"/></td>
                <td style={{"--i":"12"}}><Skills skillName="Communication" value="60"/></td>
              </tr>
              <tr className="second-row">
                <td style={{"--i":"8"}}><Skills skillName="Microsoft Word" value="75"/></td>
                <td style={{"--i":"9"}}><Skills skillName="Microsoft PowerPoint" value="75"/></td>
                <td style={{"--i":"10"}}><Skills skillName="Time Management" value="70"/></td>
                <td style={{"--i":"11"}}><Skills skillName="Team Work" value="75"/></td>
                <td style={{"--i":"12"}}><Skills skillName="Team Work" value="75"/></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="project-info">
          <div className="main-project-title">
            <p>Project Information</p>
          </div>
          <div className="projects">
            <Projects title="NewsMonkey Web App"/>
            <Projects title="TextUtils Web App"/>
            <Projects title="Student Leave and Attendance Management System"/>
          </div>
        </div>
        <div className="contact">
          <div className="contact-title">
            <p>Contact Me</p>
          </div>
          <div className="contact-page">
            <Contactme />
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
