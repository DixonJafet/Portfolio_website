import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <div class="container">
      <h1>Jafet Dixon Solano</h1>
      <p class="subtitle">Software Engineer | Data Science </p>
      <div class="contact-links">
        <a href="mailto:dixonjafet@gmail.com" target="_blank">Email</a>
        <a href="https://www.linkedin.com/in/jafetdixon-solano-733321174" target="_blank">LinkedIn</a>
        <a href="https://github.com/DixonJafet" target="_blank">GitHub</a>
        <a href="https://github.com/JafetDS" target="_blank">GitHub 2</a>
      </div>
    </div>
  </header>

  <main class="container">
    <section class="about">
      <h2>About Me</h2>
      <p>Standing out for my soft skills and my passion for continuous learning. I adapt easily to new technologies and work environments, which allows me to integrate quickly and add value to teams.</p>
      <p><strong>Location:</strong> Costa Rica | <strong>Phone:</strong> +506 83151651</p>
    </section>

    <section class="education">
      <h2>Education</h2>
      <div class="education-item">
        <h3>Costa Rica Institute of Technology (TEC)</h3>
        <p>Computer Engineering</p>
      </div>
      <div class="education-item">
        <h3>Certifications</h3>
        <ul>
          <li>Data Science with Python - IBM Applied Data Science with Python L2</li>
          <li>Machine Learning Pipelines with Azure ML Studio - Azure-Coursera</li>
          <li>Data, Data, Everywhere - Data Analysis Google</li>
        </ul>
        <a href="https://www.linkedin.com/in/jafetdixon-solano-733321174" target="_blank">Check Certifications</a>
      </div>
      <div class="education-item">
        <h3>Professional Technical High School of Limón</h3>
        <p>IT Technician in Support</p>
      </div>
    </section>

    <section class="projects">
      <h2>Projects</h2>

      <div class="project-card">
        <h3>VirtualClassRoom</h3>
        <p>Management system designed for professors, similar to Google Classroom.</p>
        <div class="project-links">
          <a href="https://github.com/DixonJafet/VirtualClassRoom" target="_blank">GitHub</a>
          <a href="https://virtual-class-room-peach.vercel.app" target="_blank">Live Demo</a>
        </div>
      </div>

      <div class="project-card">
        <h3>DixonGPT</h3>
        <p>Chat AI powered by a Mini LLM model running in Docker Container.</p>
        <div class="project-links">
          <a href="https://github.com/DixonJafet/DixonGPT" target="_blank">GitHub</a>
          <a href="https://dixon-gpt.vercel.app" target="_blank">Live Demo</a>
        </div>
      </div>

      <div class="project-card">
        <h3>Data Science Projects</h3>
        <p>A repository containing various Data Science projects.</p>
        <div class="project-links">
          <a href="https://github.com/DixonJafet/DataAnalysis" target="_blank">GitHub</a>
          <a href="https://colab.research.google.com/drive/1yBgCDW8X2QICDE2C087UfiRKXnCXsBN?usp=sharing" target="_blank">Sample Project</a>
        </div>
      </div>

      <div class="project-card">
        <h3>Assembly x8086 Basic Graphic Calculator</h3>
        <p>Low-level calculator implementation in Assembly language.</p>
        <div class="project-links">
          <a href="https://github.com/DixonJafet/x8086ASMCalc" target="_blank">GitHub</a>
        </div>
      </div>

      <div class="project-card">
        <h3>C++ Remote Memory Management</h3>
        <p>Language and Remote Memory Management using Sockets for Communication.</p>
        <div class="project-links">
          <a href="https://github.com/JafetDS/Proyecto1Datos2C" target="_blank">GitHub</a>
        </div>
      </div>
    </section>

    <section class="skills">
      <h2>Technical Skills</h2>

      <div class="skill-category">
        <h3>Programming</h3>
        <p>Java, C#, Python, JavaScript, C/C++, Assembly</p>
      </div>

      <div class="skill-category">
        <h3>Frameworks</h3>
        <p>.NET MVC, Node.js, React.js, Angular js, SpringBoot</p>
      </div>

      <div class="skill-category">
        <h3>Databases</h3>
        <p>MySQL, SQL Server, MongoDB, Redis, PostgreSQL</p>
      </div>

      <div class="skill-category">
        <h3>Cloud Services</h3>
        <p>AWS (Lambda, EC2, S3, ECR), Azure (App Services, Azure Blob Storage, Azure Database)</p>
      </div>

      <div class="skill-category">
        <h3>DevOps</h3>
        <p>Docker, Kubernetes, Github Actions</p>
      </div>

      <div class="skill-category">
        <h3>Data Science</h3>
        <p>PowerBI (DAX), Spark, Airflow, Matplotlib, Pandas</p>
      </div>

      <div class="skill-category">
        <h3>Others</h3>
        <p>bash Linux, SSH protocol, APIs, Jira</p>
      </div>
    </section>

    <section class="languages">
      <h2>Languages</h2>
      <div class="language-item">
        <strong>English:</strong> B2+ (Professional use at Amazon Customer Service)
      </div>
      <div class="language-item">
        <strong>Spanish:</strong> Native
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Jafet Dixon Solano. All rights reserved.</p>
    </div>
  </footer>
`
