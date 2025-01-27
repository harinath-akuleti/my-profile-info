import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/harinath-akuleti"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit GitHub repository" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>
                {" "}
                E-Commerce Website and Mobile Application (Customer and Admin
                Apps)
              </h3>
              <p>
                Developed a mobile-responsive e-commerce platform featuring both
                customer and admin apps. The customer app allows users to browse
                products, manage their cart, and complete secure payments via
                Razorpay. The admin app offers product and user management with
                role-based access. Integrated Google Maps for location
                auto-complete and social login for easy admin authentication.
                The platform is cross-platform compatible, deployed on Android
                and iOS using Ionic and Capacitor.
              </p>
            </div>

            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Ionic</li> <li>Capacitor</li> <li>Android Studio</li>
                <li> Razorpay SDK</li>
                <li>Google Maps API </li>
                <li>Firebase</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/harinath-akuleti"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit GitHub repository" />
                </a>
                <a
                  href="https://staging.di3540ht7cw67.amplifyapp.com/demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={externalLink}
                    alt="Multilingual JSON Object Generator Using Angular"
                  />
                </a>
              </div>
            </header>
            <div className="body">
              <h3> Multilingual JSON Object Generator Using Angular</h3>
              <p>
                Developed a web application with Angular to generate
                language-specific JSON objects for i18n (internationalization).
                The tool allows users to input a JSON structure, translate its
                values into a selected language using Google Translate API, and
                output a translated JSON object. It features dynamic language
                selection and real-time API integration for translations. The
                application automates the creation of multilingual JSON objects,
                reducing manual effort and boosting team productivity in
                multilingual feature implementations.
              </p>
            </div>

            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Angular</li> <li>TypeScript</li>{" "}
                <li>Google Translate API </li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/harinath-akuleti/weather-info"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit GitHub repository" />
                </a>
                <a
                  href="https://weather-info-seven.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit weather application" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Weather Dashboard Application</h3>
              <p>
                Built an interactive weather dashboard using React, OpenWeather
                API, and Tailwind CSS to display real-time weather information
                for multiple cities. Users can view details such as temperature,
                humidity, wind speed, and weather conditions through a
                responsive and visually engaging UI, with features like location
                search, dynamic icons, and background changes based on weather
                conditions.
              </p>
            </div>

            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React</li> <li>Open Weather API</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/harinath-akuleti/manufacture-master"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit GitHub repository" />
                </a>
                <a
                  href="https://manufac-master-pc6o.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit weather application" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>
                Crop Analytics Dashboard: Crop Production and Yield Insights
              </h3>
              <p>
                Built a data-driven crop analytics dashboard using React and
                Chart.js to visualize crop production and average yield trends
                across India from 1950 to 2020, using datasets from NITI Aayog.
                The interactive interface enables users to explore crop yield
                patterns, production growth over time, and compare different
                crops for insights on agricultural trends and productivity,
                providing valuable insights into historical agricultural data.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Mantine UI</li>
                <li>TypeScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/harinath-akuleti"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit GitHub repository" />
                </a>
                <a
                  href="https://todo-app-b96a5.web.app/register"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit weather application" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Task Manager Application</h3>
              <p>
                Developed a task management application using React, SQLite,
                Bootstrap, and CSS to help users efficiently create, manage, and
                organize tasks. The app features intuitive task categorization,
                priority settings, and due dates, along with sorting and
                filtering options. Leveraged React for dynamic UI updates and
                SQLite for local data storage, ensuring fast and seamless task
                management. Bootstrap and custom CSS were used to create a
                responsive and user-friendly interface.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>SqLite</li>
                <li>Bootstrap</li>
                <li>JWT</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
