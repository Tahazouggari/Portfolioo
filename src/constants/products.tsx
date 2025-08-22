import sidefolioAceternity from "public/images/cms.png";
import sidefolioAceternity2 from "public/images/cms2.png";
import sidefolioAlgochurn from "public/images/phishingurldetector.png";
import sidefolioAlgochurn2 from "public/images/phishingurldetector.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import Newsmobileapp from "public/images/newsapp.png";
import parachute from "public/images/parachute.png";
import EpidemicSim from "public/images/EpidemicSim.png";
import pentesterlabImg from "public/images/pentesterlab.png";
import LCLme from "public/images/hackathon.jpeg";
import LCLwe from "public/images/lclwe.jpeg";
import LCLLion from "public/images/hackathonLion.jpeg";
import LCLgoogle from "public/images/LCLxgooglecloud.jpeg";
import lclhost from "public/images/lclehost.jpeg";

export const products = [
  {
    href: "https://github.com/Tahazouggari/CMS",
    title: "Content Management System ",
    description:
      "Content Management System (CMS)",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Laravel", "PHP", "MySQL"], 
    slug: "cms",
    content: (
  <div>
    <p className="text-base leading-relaxed">
      we developed this project during my <strong>second year of engineering studies (2A)</strong> at ENSICAEN as part of my academic work. 
      It was carried out under the supervision of the{" "}
      <a 
        href="https://www.ensicaen.fr/recherche/laboratoires/greyc/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline"
      >
        GREYC laboratory
      </a>.
    </p>
    <p>
      This content management system (CMS) is a web application that enables users to create and manage their own pages with ease. 
      It offers both the option to build from scratch and to use predefined templates. The interface is simple and intuitive, 
      making it accessible to both technical and non-technical users. With built-in authentication, the system ensures that 
      content is securely managed and only authorized users can access editing features.
    </p>
    <p>
      In addition to page creation, users can preview their content before publishing, delete pages if needed, and invite collaborators to work together in real time. The system is designed to support dynamic content and aims to offer a more flexible and interactive experience. It&apos;s ideal for users looking for a customizable and user-friendly platform to manage their website content efficiently.
    </p>
  </div>
),

  },
  {
    href: "https://github.com/Tahazouggari/Pishing-Urls-detector",
    title: "Phishing Url detector",
    description:
      "The project analyzes a URL's structure, domain data, and web behavior to extract features for a machine learning model that predicts whether the URL is phishing or legitimate.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Python", "Flask"],
    slug: "phishing-url-detector",
    content: (
  <div>
    <p>
      This project transforms a raw URL into a set of meaningful numerical features that can be analyzed by a machine learning model to determine whether the URL is legitimate or phishing. The process begins by examining the URL&apos;s structure—measuring its length, depth, presence of special symbols, and the use of shortening services. It also looks for suspicious patterns such as hyphens in domain names, excessive dots, or the inclusion of sensitive words like &quot;login&quot; or &quot;secure,&quot; which are common in phishing attempts. The system then checks domain registration details, such as the age and expiration date, using WHOIS data to assess the domain&apos;s credibility. If this information is unavailable, it flags the URL as more suspicious.
    </p>
    <p>
      The analysis continues by attempting to fetch the actual webpage content and scanning for common phishing behaviors in the HTML code, such as the use of iframe tags, misleading mouse-over actions, and multiple redirections. These behavioral signals are condensed using dimensionality reduction techniques to keep the model efficient. Additional checks include detecting URLs that use IP addresses instead of domain names, the presence of the &quot;@&quot; symbol, and hidden Unicode characters. All these extracted signals are compiled into a structured format that the model uses to make a prediction, effectively turning raw URL data into a security assessment powered by machine learning.
    </p>
  </div>
),
  },
 
{
  href: "https://gitlab.ecole.ensicaen.fr/toujani/epidemy-os",
  title: "Epidemic-simulation",
  description:
    "Simulation od an epidemic inside your machine.",
  thumbnail: EpidemicSim,
  images: [EpidemicSim],
  stack: ["threads", "inter-process communication", "shared memory"],
  slug: "epidemic-simulation",
  content: (
    <div>
      <p>
        This project simulates the spread of an epidemic within a city, using various mechanisms such as inter-process communication, shared memory, and threading. The goal is to model citizen roles and their interactions to manage and mitigate the contamination.
      </p>
      <iframe
        src="/pdf/EpidemicSim.pdf"
        width="100%"
        height="500px"
        style={{ border: "1px solid #ccc", borderRadius: "8px", marginTop: "16px" }}
        title="Epidemic Simulation Report"
      />
      <div className="mt-4 text-gray-700">
        Cant &apos; view the PDF?{" "}
        <a
          href="/pdf/EpidemicSim.pdf"
          download
          className="text-blue-600 underline"
        >
          Download it here.
        </a>
      </div>
    </div>
  ),
},

  {
    href: "https://github.com/Tahazouggari/Parachute",
    title: "ParachuteEncoder",
    description:
      "ParachuteEncoder is a Qt-based tool that visually encodes messages into customizable parachute designs inspired by the Perseverance rover’s landing system.",
    thumbnail: parachute,
    images: [parachute],
    stack: ["Qt", "MVP"],
    slug: "parachute-encoder",
    content: (
      <div>
        <p><strong>ParachuteEncoder</strong> is a graphical application built with Qt that allows users to encode textual messages into binary and visualize them as stylized parachute designs, inspired by NASA&rsquo;s Perseverance rover. The tool supports standard ASCII (7-bit) and Mode 10 (10-bit with padding) encodings, and renders the message as colored sectors and tracks on a circular parachute. Users can customize the number of segments, colors, background image, and even the reference character used in encoding. The application also includes hexadecimal visualization, dynamic language switching (English/French), and a responsive, modern UI.</p>

        <p>Designed with the Model-View-Presenter (MVP) pattern, the project emphasizes modularity and clarity in design. It offers features such as exporting the visualized parachute as a PNG image and saving/loading complete session data via custom <code>.ep</code> files. ParachuteEncoder aims to blend creativity and encoding education through an intuitive and interactive interface, making it a powerful demonstration of how data can be embedded into visual patterns for both fun and functional uses.</p>
          
      </div>
    ),
  },

  {
    href: "https://github.com/Tahazouggari/NewsMobileApp?tab=readme-ov-file",
    title: "NewsMobileApp",
    description:
    "A news application developed during my studies at ENSICAEN under the supervision of Professor Anthony Roger, built with Java and Kotlin using the MVVM architecture.",
  thumbnail: Newsmobileapp,
  images: [Newsmobileapp],
  stack: ["Java", "Kotlin", "MVVM", "Room", "Retrofit", "Coroutines"],
  slug: "newsmobileapp",
  content: (
    <div>
      <p>
        NewsMobileApp is an Android application built with 
         Java and Kotlin, developed as part of my academic 
        coursework at ENSICAEN under the supervision of{" "}
        <a 
          href="https://www.linkedin.com/in/anthonyroger/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Professor Anthony Roger
        </a>. 
        The app is designed to deliver real-time news through a clean and 
        intuitive interface while following the <strong>MVVM architecture</strong> 
        for modularity and maintainability.
      </p>

      <p>
        Core features include fetching headlines via the News API, saving 
        favorite articles with offline access through Room Database, 
        and searching for news by keyword. The app uses 
         Retrofit for API calls, Coroutines for 
        smooth background processing, and Android’s Navigation Component
        for seamless screen transitions.
      </p>

      <p>
        The project emphasizes usability and performance, with offline support, 
        efficient caching, and a responsive design. It demonstrates practical 
        integration of Android components such as DAOs, repositories, and 
        fragments, resulting in a scalable and user-friendly news platform.
      </p>

      <p>
        <strong>GitHub Pages:</strong>{" "}
        <a href="https://tahazouggari.github.io/NewsMobileApp/" target="_blank">
          Project Documentation
        </a>
      </p>
    </div>
  )
},

  {
    href: "https://www.linkedin.com/posts/sandrine-bertrand-b575071_partenaire-hackathonbylcl2024-ai-activity-7241324935120400384-i0yB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2bmiQBRzwUTX2oJwcn0bev7sOmJD685wk",
    title: "LCL x Google Cloud 2024",
    description:
      "The event challenged participants to predict customer financial behaviors and generate personalized product and service recommendations for LCL.",
    thumbnail: LCLme,
    images: [LCLwe,LCLgoogle,lclhost],
    stack: ["Python","BigQuery","Machine Learning","Data Analysis"],
    slug: "lcl-google-cloud-2024",
    content: (
      <div>
        <p>
          Ahead of the <strong> Hackathon LCL 2024</strong>, I successfully completed several Google Cloud training modules, including <em>Cloud Fundamentals: Core Infrastructure</em> and <em>Generative AI with Vertex AI and Gemini</em>. These courses provided a solid foundation in cloud architecture and AI integration, which proved invaluable during the competition. 
        </p>
    
        <p>
          The hackathon featured two distinct challenges: one centered on predicting customer financial behaviors with machine learning, and another on deploying an AI-powered ChatBot using Gemini AI. Our team was assigned the first challenge, where we designed and implemented scalable solutions for customer behavior analysis and personalized product recommendations by leveraging Google Cloud Platform.
        </p>
    
        <p>
          Carried out under intense time constraints, the competition required 48 hours of continuous, high-pressure work. This experience not only enhanced my technical expertise in machine learning, data analysis, and cloud deployment, but also strengthened my resilience, adaptability, and ability to collaborate effectively. It provided direct exposure to real-world financial technology use cases and fostered valuable connections with professionals from LCL and Google Cloud.
        </p>
      </div>
    ),
    
    
  },
];
